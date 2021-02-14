% This code is used for reconstruction of gray image 
clc;
clear;
%% Initialization
addpath (genpath([pwd '\Registration\']));
addpath('YALL1_v1.4');
inputFolder = 'data sets_video/';
outputFolder = 'output/';
if ~exist(outputFolder,'dir')
    mkdir(outputFolder);
end
USE_GPU = gpuDeviceCount>0; % Set to False if you don't waant to use gpu
viariable_init(); % Set the parameters used in patches fusion
VideoUtil = VideoUtility();
%% Input Datasets
file = strcat(inputFolder, 'middle.avi'); % Select the datasets
fileTag = VideoUtil.getFileTag(file);
frames= readFrames(file);
%% The first stage: CS reconstruction
mvfCS = getMotionVectorFieldCS(frames, inf, [8,8,1], [0,0,0], USE_GPU);
frames= im2double(frames);
reconFrames = VideoUtil.WarpVideo(frames, mvfCS, false);
frames = reconFrames;
%% The second stage: IR reconstruction
Means=mean(frames,3);% get the mean
filtSize = [10,3,1,1,1];
Options = struct('Similarity','sd'); % use Options = struct('Similarity','mi') for mutual information (better but much slower)
for indexLoops=1:5
    Istatic = Means(:,:,indexLoops);
    p = Istatic;
    r = 8;
    eps = 0.02^2;
    q = zeros(size(Istatic));
    q(:, :, 1) = guidedfilter(Istatic(:, :), p(:, :), r, eps);% use guidedfilter in mean image
    I_enhanced = (Istatic - q) * 5 + q;
    for indexImages=1:size(frames,3)
        Imoving=frames(:,:,indexImages);       
        [reg_blur,O_trans,Spacing,M,Bx,By,Fx,Fy] = register_images(Imoving,I_enhanced,Options);
        % warp the original frame
        reg_noblur=bspline_transform(O_trans,Imoving,Spacing,3);
        frames(:,:,indexImages) = reg_noblur;
    end
    Means(:,:,indexLoops+1) = mean(frames,3);
    outfile = ['middle' sprintf('%d',indexLoops)]; % Set name of outfile
    frames(frames>1)=1;
    frames(frames<0)=0;
    writeOutput1(outputFolder, frames, outfile);
end
%% post_processing and output
output = patch_fuse(frames,indexLoops+1);
outputName = [outputFolder, 'output.jpg'];
imwrite(output, outputName);
%% output the mean of results in each iterative registration 
for indexLoops=1:6
    filename = [outputFolder, 'mean',sprintf('%d',indexLoops),'.jpg']; 
    imwrite(Means(:,:,indexLoops),filename);
end


%% functions used in algorithm
function frames= readFrames(filePath)
    v = VideoReader(filePath);
    frames_color = read(v);
    frames = squeeze(mean(frames_color,3))/255;
end

function []=writeOutput1(outFol, reconFrames, name)
    file = strcat(outFol,name,'.avi');
    nrFrames = size(reconFrames,3);
    v = VideoWriter(file,'Motion JPEG AVI');
    v.Quality = 100;
    v.FrameRate = 50;
    open(v);
    for i = 1:nrFrames
        outFrame = squeeze(reconFrames(:,:,i));
        writeVideo(v,outFrame);
    end
end

function viariable_init()
global Options;
global image_height;
global image_width;
global patch_height;
global patch_width;
global patch_h;
global patch_w;

Options = struct('Similarity','sd'); 
image_height = 252; 
image_width = 290; 
patch_height = 84;
patch_width =116;
patch_h = 5; 
patch_w = 4;

end
