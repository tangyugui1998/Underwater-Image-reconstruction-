var s_account="mathmain"
var s=s_gi(s_account)
s.dynamicAccountSelection=true
s.dynamicAccountList="mathdev=www-external-dev.,www-external-test.,www-external-stage.,www-external-dev2.,www-external-test2.,www-external-perf.,ec2-75-101-233-28.compute-1.amazonaws.com;mathintranet=inside.,sharepoint/,sharepoint.mathworks.com,sharepoint:,www-internal,internal-eu,progeck/progeck/php,progeck2/progeck2/php,soloj2/;mathExtra=distribs/;mathGlobal,mathAU=.mathworks.com.au;mathGlobal,mathUK=.mathworks.co.uk;mathGlobal,mathCH=.mathworks.ch;mathGlobal,mathES=.mathworks.es;mathGlobal,mathNordic=.mathworks.se;mathGlobal,mathKR=.mathworks.co.kr;mathGlobal,mathIT=.mathworks.it;mathGlobal,mathCN=.mathworks.cn;mathGlobal,mathDE=.mathworks.de;mathGlobal,mathFR=.mathworks.fr;mathGlobal,mathNL=.mathworks.nl;mathGlobal,mathIN=.mathworks.in;mathGlobal,mathJP=.mathworks.co.jp,jmaab.mathworks.jp;mathGlobal,mathTools=.mathtools.net;mathGlobal,mathmain=.mathworks.com,mathworks.demoservers.com,clients.cerida.com;mathGlobal,mathmain,mathmathwebex=mathworksevents.webex.com;mathpolyspace=polyspace.com,polyspace.fr,polyspace.eu,polyspace.it,polyspace.co.il,polyspace.co.uk,polyspace.de,polyspace.be,polyspace.org,scaservices.com,polyspace.cn,silicomp-software-validation.com,my-polyspace.com,polyspace-customer-center.com,polyspace-extranet.com"
s.dynamicAccountMatch=window.location.host+window.location.pathname
s.charSet="UTF-8"
s.currencyCode="USD"
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,docx,pdf,xls,xlsx,wrf,sea"
s.linkInternalFilters="javascript:,mathworks.com"
s.linkLeaveQueryString=true
s.linkTrackVars="None"
s.linkTrackEvents="None"
s.visitorNamespace="mathworks"
s.cookieDomainPeriods="2"
s.p_wl=''+window.location
if(s.p_wl.indexOf(".co.uk")>-1 || s.p_wl.indexOf(".com.au")>-1 || s.p_wl.indexOf(".co.kr")>-1 || s.p_wl.indexOf(".co.jp")>-1)
s.cookieDomainPeriods="3"
s.siteID=window.location.host;
s.defaultPage="index.html";
s.queryVarsList="targetURL,rp,bb,mwoffice,theAction,date,location,lang,format,file,video,14,9,p,objectId,objectType,product,sec,eventid,id,document,cid,uri,parenttopic,courseNum,view,by,tab,db,prox,rorder,rprox,rdfreq,rwfreq,rlead,sufs,order,is_summary_on,ResultCount,query,submitButtonName,task,type,app_id,prod_type,ind,prod,tmw_product_id,comp,app_name,app_type,prod_name,prod_id,loc,dateid,fileid,k,s,source";
s.pathExcludeDelim=";";
s.pathConcatDelim="::";

s.usePlugins=true
function s_doPlugins(s) {
  	
	if (s.c_r('top_real_referrer')==top.real_referrer && (s.getFolderName(4)=='techdoc' || s.getFolderName(4)=='toolbox')) { s.referrer=document.referrer; }
	else { if (s.getFolderName(4)=='techdoc' || s.getFolderName(4)=='toolbox') { s.referrer=top.real_referrer; s.c_w('top_real_referrer',top.real_referrer,0); }}
	
	if ((!window.s.pageType) && (!window.s.pageName || s.pageName==""))
		s.pageName=s.getPageName();
	
	s.server=window.location.host;
	
	if (s.getFolderName(1) != '') { s.channel=location.pathname.substring(0,location.pathname.lastIndexOf('/')); }
	else { s.channel=window.location.host +"::"+ 'homepage'; }
	
	if (s.channel=='/products/image' || s.channel=='/products/imageb' || s.channel=='/products/simbiology' || s.channel=='/products/simbiologyb') { s.eVar10='productpagetest'; }
	if (s.channel=='/products/image' && document.cookie.match('s_prodpagetest_imgA')) { s.eVar1='prodpagetest_imgA'; s.prop23='prodpagetest_imgA'; }
	else { if (s.channel=='/products/image') { s.c_w('s_prodpagetest_imgA','s_prodpagetest_imgA',0); s.eVar1='prodpagetest_imgA'; s.prop23='prodpagetest_imgA'; }}
	if (s.channel=='/products/imageb' && document.cookie.match('s_prodpagetest_imgB')) { s.eVar1='prodpagetest_imgB'; s.prop23='prodpagetest_imgB'; }
	else { if (s.channel=='/products/imageb') { s.c_w('s_prodpagetest_imgB','s_prodpagetest_imgB',0); s.eVar1='prodpagetest_imgB'; s.prop23='prodpagetest_imgB'; }}
	if (s.channel=='/products/simbiology' && document.cookie.match('s_prodpagetest_simbioA')) { s.eVar1='prodpagetest_simbioA'; s.prop23='prodpagetest_simbioA'; }
	else { if (s.channel=='/products/simbiology') { s.c_w('s_prodpagetest_simbioA','s_prodpagetest_simbioA',0); s.eVar1='prodpagetest_simbioA'; s.prop23='prodpagetest_simbioA'; }}
	if (s.channel=='/products/simbiologyb' && document.cookie.match('s_prodpagetest_simbioB')) { s.eVar1='prodpagetest_simbioB'; s.prop23='prodpagetest_simbioB'; }
	else { if (s.channel=='/products/simbiologyb') { s.c_w('s_prodpagetest_simbioB','s_prodpagetest_simbioB',0); s.eVar1='prodpagetest_simbioB'; s.prop23='prodpagetest_simbioB'; }}	
		
	if (s.getQueryParam('s_cid') != '') { s.campaign=s.getQueryParam('s_cid'); }
	if (s.campaign != '') {s.prop1=s.getAndPersistValue(s.campaign,'s_cmp_pages',0); }
	if (s.prop1 != '') { s.prop2=s.prop1 +"::"+ s.pageName; }
	else { s.prop2=''; }
	if (s.getQueryParam('s_v1') != '') { s.eVar1=s.getQueryParam('s_v1'); }
 	if (s.eVar1 != '') { s.prop12=s.getAndPersistValue(s.eVar1,'s_v1_pages',0); }
	else { s.prop12=''; }
	if (s.prop12 != '') { s.prop13=s.prop12 +"::"+ s.pageName; }
	else { s.prop13=''; }
	if (s.getQueryParam('s_sid') != '') { s.eVar2=s.getQueryParam('s_sid'); }
	if (s.getQueryParam('prodCode') != '') { s.products=s.getQueryParam('prodCode'); }
	if (s.getQueryParam('ref') != '') { s.eVar2=s.getQueryParam('ref'); s.prop10=s.getQueryParam('ref'); }
	if (s.getQueryParam('query') != '') { s.eVar3=s.getQueryParam('query'); s.prop3=s.getQueryParam('query'); }
	if (document.cookie.match('MW_AL')) { s.eVar4='logged in'; }
	else { s.eVar4='not logged in'; }
	if (document.cookie.match('MW_AL')) { s.eVar5=s.c_r('MW_AL'); s.prop16=s.c_r('MW_AL'); }
	s.eVar6=s.getNewRepeat();
	s.eVar7=s.getVisitNum();
	s.eVar9=s.getDaysSinceLastVisit();
	s.prop4=s.getPageName();
	
	if (s.getFolderName(1) != '' && s.getFolderName(1) == 'solutions' || s.getFolderName(1) == 'data-acquisition' || s.getFolderName(1) == 'data-analysis' || s.getFolderName(1) == 'mathematical-modeling' || s.getFolderName(1) == 'algorithm-development' || s.getFolderName(1) == 'parallel-computing' || s.getFolderName(1) == 'desktop-web-deployment' || s.getFolderName(1) == 'system-design-simulation' || s.getFolderName(1) == 'physical-modeling' || s.getFolderName(1) == 'discrete-event-simulation' || s.getFolderName(1) == 'rapid-prototyping' || s.getFolderName(1) == 'embedded-code-generation' || s.getFolderName(1) == 'hdl-code-generation-verification' || s.getFolderName(1) == 'verification-validation' || s.getFolderName(1) == 'communications-systems' || s.getFolderName(1) == 'computational-biology' || s.getFolderName(1) == 'computational-finance' || s.getFolderName(1) == 'control-systems' || s.getFolderName(1) == 'dsp' || s.getFolderName(1) == 'embedded-systems' || s.getFolderName(1) == 'fpga-design' || s.getFolderName(1) == 'image-video-processing' || s.getFolderName(1) == 'mechatronics' || s.getFolderName(1) == 'test-measurement' || s.getFolderName(1) == 'aerospace-defense' || s.getFolderName(1) == 'automotive' || s.getFolderName(1) == 'biotech-pharmaceutical' || s.getFolderName(1) == 'communications' || s.getFolderName(1) == 'electronics-semiconductors' || s.getFolderName(1) == 'financial-services' || s.getFolderName(1) == 'industrial-automation-machinery') { s.prop5="solutions"; } else if (s.getFolderName(1) != '' && s.getFolderName(2) != '' && s.getFolderName(1) == 'industries' && s.getFolderName(2) == 'other') { s.prop5="solutions"; } else { s.prop5=s.getFolderName(1); }
	
	if (s.getFolderName(1) != '' && s.getFolderName(1) == 'data-acquisition' || s.getFolderName(1) == 'data-analysis' || s.getFolderName(1) == 'mathematical-modeling' || s.getFolderName(1) == 'algorithm-development' || s.getFolderName(1) == 'parallel-computing' || s.getFolderName(1) == 'desktop-web-deployment') { s.prop6=s.prop5+"/capabilities-tc"; } else if (s.getFolderName(1) != '' && s.getFolderName(1) == 'system-design-simulation' || s.getFolderName(1) == 'physical-modeling' || s.getFolderName(1) == 'discrete-event-simulation' || s.getFolderName(1) == 'rapid-prototyping' || s.getFolderName(1) == 'embedded-code-generation' || s.getFolderName(1) == 'hdl-code-generation-verification' || s.getFolderName(1) == 'verification-validation') { s.prop6=s.prop5+"/capabilities-mbd"; } else if (s.getFolderName(1) != '' && s.getFolderName(1) == 'communications-systems' || s.getFolderName(1) == 'computational-biology' || s.getFolderName(1) == 'computational-finance' || s.getFolderName(1) == 'control-systems' || s.getFolderName(1) == 'dsp' || s.getFolderName(1) == 'embedded-systems' || s.getFolderName(1) == 'fpga-design' || s.getFolderName(1) == 'image-video-processing' || s.getFolderName(1) == 'mechatronics' || s.getFolderName(1) == 'test-measurement') { s.prop6=s.prop5+"/applications"; } else if (s.getFolderName(1) != '' && s.getFolderName(1) == 'aerospace-defense' || s.getFolderName(1) == 'automotive' || s.getFolderName(1) == 'biotech-pharmaceutical' || s.getFolderName(1) == 'communications' || s.getFolderName(1) == 'electronics-semiconductors' || s.getFolderName(1) == 'financial-services' || s.getFolderName(1) == 'industrial-automation-machinery') { s.prop6=s.prop5+"/industries"; } else if (s.getFolderName(1) != '' && s.getFolderName(2) != '' && s.getFolderName(1) == 'industries' && s.getFolderName(2) == 'other') { s.prop6=s.prop5+"/industries"; } else if (s.getFolderName(1) != '' && s.getFolderName(2) != '') { s.prop6=s.getFolderName(1)+"/"+s.getFolderName(2); }
	
	if (s.getFolderName(1) != '' && s.getFolderName(1) == 'data-acquisition' || s.getFolderName(1) == 'data-analysis' || s.getFolderName(1) == 'mathematical-modeling' || s.getFolderName(1) == 'algorithm-development' || s.getFolderName(1) == 'parallel-computing' || s.getFolderName(1) == 'desktop-web-deployment' || s.getFolderName(1) == 'system-design-simulation' || s.getFolderName(1) == 'physical-modeling' || s.getFolderName(1) == 'discrete-event-simulation' || s.getFolderName(1) == 'rapid-prototyping' || s.getFolderName(1) == 'embedded-code-generation' || s.getFolderName(1) == 'hdl-code-generation-verification' || s.getFolderName(1) == 'verification-validation' || s.getFolderName(1) == 'communications-systems' || s.getFolderName(1) == 'computational-biology' || s.getFolderName(1) == 'computational-finance' || s.getFolderName(1) == 'control-systems' || s.getFolderName(1) == 'dsp' || s.getFolderName(1) == 'embedded-systems' || s.getFolderName(1) == 'fpga-design' || s.getFolderName(1) == 'image-video-processing' || s.getFolderName(1) == 'mechatronics' || s.getFolderName(1) == 'test-measurement' || s.getFolderName(1) == 'aerospace-defense' || s.getFolderName(1) == 'automotive' || s.getFolderName(1) == 'biotech-pharmaceutical' || s.getFolderName(1) == 'communications' || s.getFolderName(1) == 'electronics-semiconductors' || s.getFolderName(1) == 'financial-services' || s.getFolderName(1) == 'industrial-automation-machinery') { s.prop7=s.prop6+"/"+s.getFolderName(1); } else if (s.getFolderName(1) != '' && s.getFolderName(2) != '' && s.getFolderName(1) == 'industries' && s.getFolderName(2) == 'other') { s.prop7=s.prop6+"/other"; } else if (s.getFolderName(1) != '' && s.getFolderName(2) != '' && s.getFolderName(3) != '') { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getFolderName(3); }
	
	if (window.s.pageType=='errorPage') { s.channel='404-pagenotfound' + location.pathname.substring(0,location.pathname.lastIndexOf('/')); }
	if (s.getPageName() == window.location.host + '::' + 'access' + '::' + 'pagenotfound.html') { s.channel='404-pagenotfound/documentation'; }
	if (window.location.host=='newsreader.mathworks.com') { s.channel='/matlabcentral/newsreader'; s.prop5='matlabcentral'; s.prop6='matlabcentral/newsreader'; }
	if (window.location.host=='webchat.mathworks.com') { s.channel='/matlabcentral/newsreader'; s.prop5='matlabcentral'; s.prop6='matlabcentral/newsreader'; }
	if (window.location.host=='blogs.mathworks.com') { s.channel='/matlabcentral/blogs'; s.prop5='matlabcentral'; s.prop6='matlabcentral/blogs'; s.prop7='matlabcentral/blogs/' + s.getFolderName(1); }
	if (window.location.host=='matlabwiki.mathworks.com') { s.channel='/matlabcentral/matlabwiki'; s.prop5='matlabcentral'; s.prop6='matlabcentral/matlabwiki'; }
	if (window.location.host=='mathworks.demoservers.com') { s.channel='products/onlinetrials'; s.prop5='products'; s.prop6='products/onlinetrials'; }
	if (window.location.pathname.search("/contest/") != -1) { s.channel='/matlabcentral/contest'; s.prop5='matlabcentral'; s.prop6='matlabcentral/contest'; }
	if ((window.location.pathname.search("/cgi-bin/texis/webinator/") != -1) || (window.location.pathname.search("/search/") != -1)) { s.channel='/sitesearch'; s.prop5='sitesearch'; s.prop6=''; s.prop7=''; }
	if (document.URL.search("/demos.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+"demos"; s.prop19="demos/"+s.getFolderName(2); }
	if (document.URL.search("/product/product.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/product/solutions.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	if (document.URL.search("/bugreports_index_by_product.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	if (document.URL.search("/books_index_by_product.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	if (document.URL.search("/tech_lit_index_by_product.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/solutions/data/") != -1) { s.prop7=s.getFolderName(1)+"/product/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/bugreports/details.html") != -1) { s.prop7=s.getFolderName(1)+"/product/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/product/sys_requirements.html") != -1) { s.prop7=s.getFolderName(1)+"/product/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/product/current_version.html") != -1) { s.prop7=s.getFolderName(1)+"/product/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/product/examples.html") != -1) { s.prop7=s.getFolderName(1)+"/product/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/product/demos_index_by_product.html") != -1) { s.prop7=s.getFolderName(1)+"/product/"+s.getQueryParam('product'); s.prop19="demos/"+s.getFolderName(1)+"/product/"+s.getQueryParam('product'); }
	if (document.URL.search("/requirements.html") != -1) { s.prop6="support/sysreq"; s.prop7="support/sysreq/"+s.getFolderName(2); }
	if (document.URL.search("/functionlist.html") != -1) { s.prop6="support/functions"; s.prop7="support/functions/"+s.getFolderName(2); }
	if (document.URL.search("/blocklist.html") != -1) { s.prop6="support/blocklist"; s.prop7="support/blocklist/"+s.getFolderName(2); }
	if (document.URL.search("/dev_notes_index_by_product.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	if (document.URL.search("/support/tech-notes/list_all.html") != -1 && s.getQueryParam('sec') !='') { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('sec'); }
	if (document.URL.search("/support/books/") != -1 && s.getQueryParam('product') !='' && s.getQueryParam('category')=='' || s.getQueryParam('category')=='-1') { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('product'); }
	else if (document.URL.search("/support/books/") != -1 && s.getQueryParam('category') !='') { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/"+s.getQueryParam('category'); }
	if (document.URL.search("/academia/student_version/support.html") != -1) { s.prop6="support/product"; s.prop7="support/product/"+s.getFolderName(2); }
	if (document.URL.search("/technicalliterature.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/techlit"; }
	if (document.URL.search("/books.html") != -1) { s.prop7=s.getFolderName(1)+"/related_books"; }
	if (document.URL.search("/userstories.html") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/userstories"; s.prop20="userstories/"+s.getFolderName(2); }
	if (document.URL.search("/company/user_stories/") != -1) { s.prop7=s.getFolderName(1)+"/"+s.getFolderName(2)+"/userstories"; s.prop20="userstories/"+s.getFolderName(1); }
	if (document.URL.search("/products/demos/") != -1) { s.prop19="demos/"+s.getFolderName(2); }
	if (document.URL.search("/related.html") != -1) { s.prop7=s.getFolderName(1)+"/related_products"; }
	if (document.URL.search("/whatsnew.html") != -1) { s.prop7=s.getFolderName(1)+"/whats_new"; }
	if (s.getQueryParam('query') != '') { s.prop8=s.getQueryParam('query') +"::"+ document.referrer; }
	if (s.getQueryParam('s_rss') != '') { s.prop11=s.getQueryParam('s_rss'); }
	if (document.cookie.match('MW_AL')) { s.prop14='logged-in'; s.prop15='logged-in' + s.channel; }
	else { s.prop14='not-logged-in'; s.prop15='not-logged-in' + s.channel; }
	if (s.prop5 != '') { s.prop9=s.prop14 +"/"+ s.prop5; }
	else { s.prop9=s.prop14 +"/"+ s.channel; }
	s.prop17=s.getNewRepeat()+"::"+s.getVisitNum();
	s.prop18=s.getDaysSinceLastVisit();
	if ((s.getFolderName(1) == 'access') && (s.getFolderName(2) != 'helpdesk_r13') && (s.getFolderName(4) == 'techdoc')) { s.prop21="documentation"+"/"+"matlab"; }
	else if ((s.getFolderName(1) == 'access') && (s.getFolderName(2) == 'helpdesk_r13') && (s.getFolderName(4) == 'techdoc')) { s.prop21="documentation"+"/"+"r_13"+"/"+"matlab"; }
	if ((s.getFolderName(1) == 'access') && (s.getFolderName(2) != 'helpdesk_r13') && (s.getFolderName(4) == 'toolbox')) { s.prop21="documentation"+"/"+s.getFolderName(5); }
	else if ((s.getFolderName(1) == 'access') && (s.getFolderName(2) == 'helpdesk_r13') && (s.getFolderName(4) == 'toolbox')) { s.prop21="documentation"+"/"+"r_13"+"/"+s.getFolderName(5); }
	if ((document.URL.search("/access/helpdesk/help/helpdesk.html") != -1) && (document.title.search("Online Documentation") != -1)) { s.prop21="documentation"+"/"+"Index page"; }
	else if ((document.URL.search("/access/helpdesk_r13/help/helpdesk.html") != -1) && (document.title.search("Documentation") != -1)) { s.prop21="documentation"+"/"+"r_13"+"/"+"Index page"; }
	if (document.URL.search("/store/productIndexSubmit.do") != -1) { s.events='scOpen,scAdd'; }
	if (document.URL.search("/store/documentationUpdate.do") != -1) { s.events='scOpen,scAdd'; }
	if (document.URL.search("/pricing_licensing.html") != -1) { s.events='prodView'; }
	if (document.URL.search("/store/cart.do") != -1) { s.events='scView'; }
	if (document.URL.search("/store/checkoutLink.do") != -1) { s.events='scCheckout'; }
	if (document.URL.search("/store/verifySubmit.do") != -1) { s.events='purchase'; }
	if (document.title=='The MathWorks - The MathWorks - Trial Software Request Confirmation') { s.events='event1'; }
	if (document.URL.search("/programs/trials/trial_confirmation.html") != -1) { s.events='event1'; }
	if (document.URL.search("/programs/trials/earlyvv_trials_confirmation.html") != -1) { s.events='event1'; }
	if (document.title=='The MathWorks Upcoming Seminars - Thank You') { s.events='event2'; }
	if (document.URL.search("/company/events/seminars/intl_reg_conf_page.html") != -1) { s.events='event2'; }
	if (document.URL.search("/store/emailQuoteConfirm.do") != -1) { s.events='event3'; }
	if (document.title=='The MathWorks - MathWorks Account - Associate with license - Status') { s.events='event5'; }
	if (document.URL.search("/services/training/conf_brochure.html") != -1) { s.events='event6'; }
	if (document.URL.search("/services/training/confirm_training.html") != -1) { s.events='event7'; }
	if (document.URL.search("/company/aboutus/contact_us/confirmation.html") != -1) { s.events='event8'; }
	if (document.URL.search("/techkits/conf_product_demo.html") != -1) { s.events='event8'; }
	if (document.referrer.substr(11,6)=='google') { s.events='event9'; }
	if (document.URL.search("/company/jobs/opportunities/confirmation.html") != -1) { s.events='event22'; }
	if (document.URL.search("/accesslogin/createProfile1.do") != -1) { s.events='event11'; }
	if (document.URL.search("/support/service_requests/submitAction.do") != -1) { s.events='event12'; }
	if (document.URL.search("/accesslogin/optOutConfirmation.do") != -1) { s.events='event13'; }
	if (document.URL.search("/support/contact_us/renewal_confirm.html") != -1) { s.events='event14'; }
	if (document.URL.search("/webforms/email_this_page_conf.html") != -1) { s.events='event16'; }
	if (document.referrer.substr(11,6)=='google' && document.cookie.match('s_googler_pogo')) { s.events='event17'; }
	else { if (document.referrer.substr(11,6)=='google') { s.c_w('s_googler_pogo','s_googler_pogo',0); }}
	if (document.URL.search("/cmspro/conf") != -1) { s.events='event18'; }
	if (document.URL.search("/techkit/conf") != -1) { s.events='event18'; }
	if (document.URL.search("conf_techkit") != -1) { s.events='event18'; }
	if ((document.URL.search("/techkits/") != -1) && (document.URL.search("conf") != -1) && (document.URL.search("/techkits/conf_product_demo.html") == -1)) { s.events='event18'; }
	if (document.URL.search("/student_version/techkit_conf") != -1) { s.events='event18'; }
	if (document.URL.search("/programs/webinar/bounce") != -1) { s.events='event20'; }
	if (s.prop4.search("::products::.*::index.html") != -1) { s.events='prodView'; }
	if (document.URL.search("/academia/student_version/eval_confirmation.html") != -1) { s.events='event21'; }
	if (document.URL.search("/store/myQuotes.do") != -1) { s.events='event23'; }
	if ((document.URL.search("/store/myQuotesSubmit.do") != -1) && (document.title.search("My Cart") != -1)) { s.events='event24'; }
	if (document.URL.search("/company/events/worldtour/simulink07/confirmation.html") != -1) { s.events='event25'; }
	if (((document.URL.search("/downloads/web_downloads/agent_download") != -1) || (document.URL.search("/downloads/web_downloads/manual_download") != -1)) && (document.title.search("Licensed Products Downloads") != -1)) { s.events='event4'; }
	if (((document.URL.search("/downloads/web_downloads/agent_download") != -1) || (document.URL.search("/downloads/web_downloads/manual_download") != -1)) && (document.title.search("Product Trials") != -1)) { s.events='event26'; }
	if (document.title.search("Mathtools.net : Successful Sign Up") != -1) { s.events='event27'; }
	if (document.URL.search("/accesslogin/loadPasscode.do") != -1) { s.events='event28'; }
	if ((document.referrer.search("/accesslogin/login.do") != -1) && (document.cookie.match('MW_AL'))) { s.events='event15'; }
	if ((document.URL.search("/store/addTrainingToCart.do") != -1) && (document.title.search("My Cart") != -1)) { s.events='event29'; }
	if ((document.URL.search("/store/attendees.do") != -1) && (document.title.search("My Cart") != -1)) { s.events='event30'; }
	if ((document.URL.search("/store/documentationUpdate.do") != -1) && (document.title.search("My Cart") != -1)) { s.events='event31'; }
	if ((document.URL.search("/academia/student_center/tutorials/") != -1) && (document.URL.search("launchpad") != -1) && (document.URL.search("/academia/student_center/tutorials/launchpad.html") == -1)) { s.events='event32'; }
	if (document.URL.search("/company/aboutus/contact_us/quote_confirmation.html") != -1) { s.events='event33'; }
	if ((document.URL.search("/webinars/upcomingconf") != -1)) { s.events='event34'; }
	else if ((document.URL.search("/cmspro/webconf") != -1) && (document.referrer.search("/cmspro/req") != '/cmspro/req')) { s.events='event19'; }
	if ((document.URL.search("/webinars/webinarconf") != -1)) { s.events='event19'; }
	if ((document.URL.search("/cgi-bin/texis/webinator/search") != -1)) { s.events='event35'; }
	if ((document.URL.search("/cgi-bin/texis/webinator/search") != -1) && (document.URL.search("query1") != -1)) { s.events='event36'; }
	if (document.URL.search("/matlab_videos/ml_videos_conf") != -1) { s.events='event37'; }
	if ((document.referrer == 'http://www.mathworks.com/') && (document.URL.search("/slhdlcoder/") != -1) || (document.URL.search("/simevents/") != -1) || (document.URL.search("/simelectronics/") != -1) || (document.URL.search("/systemtest/") != -1) || (document.URL.search("/polyspace/") != -1) || (document.URL.search("/parallel-computing/") != -1) || (document.URL.search("/bioinfo/") != -1) || (document.URL.search("/daq/") != -1) || (document.URL.search("/instrument/") != -1) || (document.URL.search("/econometrics/") != -1)) { s.events='event43'; }
	if ((document.referrer.search("/products/product_listing/index.html") != -1) && (document.URL.search("/products/") != -1)) { s.events='event44'; }
	if ((document.referrer.search(".mathworks.") == -1) && (document.URL.search("/products/") != -1)) { s.events='event10'; }
	if ((document.URL.search("/code/conf_") != -1)) { s.events='event45'; }
	if ((document.URL.search("/emea_finance/confirmation") != -1)) { s.events='event46'; }
	if ((document.URL.search("/accesslogin/confirmationLead") != -1)) { s.events='event47'; }
	if ((document.URL.search("/matlabexpo/download/download.") != -1)) { s.events='event48'; }
	s.prop28=s.getPreviousValue(s.pageName,'gpv_pn');
	if (document.URL.search("/company/events/seminars/seminar") != -1) { s.eVar12 = s.pageName }

// BEGIN Product artifacts development code
s.currentURL=s.wd.location.href.toLowerCase();
s.currentPageName=s.pageName.toLowerCase();

// The following sets product name into propN(30)

//Version when product and doc directory names ARE same
if((s.currentURL.indexOf('/aeroblks/')>-1) || (s.getQueryParam('ref') == 'ae')) {s.prop30="Aerospace Blockset"; s.prop31="V1 Control Systems";}
//Version when product and doc directory names ARE NOT the same
if((s.currentURL.indexOf('/aerotb/')>-1) || (s.currentURL.indexOf('/aerotbx/')>-1) || (s.getQueryParam('ref') == 'at')) {s.prop30="Aerospace Toolbox"; s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/bioinfo/')>-1) || (s.getQueryParam('ref') == 'bi')) {s.prop30="Bioinformatics Toolbox";s.prop31="V5 Computational Biology";}
if((s.currentURL.indexOf('/commblockset/')>-1) || (s.currentURL.indexOf('/commblks/')>-1) || (s.getQueryParam('ref') == 'cb')) {s.prop30="Communications Blockset";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/communications/')>-1) || (s.currentURL.indexOf('/comm/')>-1) || (s.getQueryParam('ref') == 'cm')) {s.prop30="Communications Toolbox";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/control/')>-1) || (s.getQueryParam('ref') == 'ct')) {s.prop30="Control System Toolbox"; s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/curvefitting/')>-1) || (s.currentURL.indexOf('/curvefit/')>-1) || (s.getQueryParam('ref') == 'cf')) {s.prop30="Curve Fitting Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/daq/')>-1) || (s.getQueryParam('ref') == 'da')) {s.prop30="Data Acquisition Toolbox";s.prop31="V4 Test and Measurement";}
if((s.currentURL.indexOf('/database/')>-1) || (s.getQueryParam('ref') == 'db')) {s.prop30="Database Toolbox";s.prop31="M1 MATLAB";}
if((s.currentURL.indexOf('/datafeed/')>-1) || (s.getQueryParam('ref') == 'df')) {s.prop30="Datafeed Toolbox";s.prop31="V6 Computational Finance";}
if((s.currentURL.indexOf('/do-178/')>-1) || (s.currentURL.indexOf('/qualkitdo/')>-1) || (s.getQueryParam('ref') == 'do')) {s.prop30="DO Qualification Kit";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/econometrics/')>-1) || (s.currentURL.indexOf('/econ/')>-1) || (s.getQueryParam('ref') == 'et')) {s.prop30="Econometrics Toolbox";s.prop31="V6 Computational Finance";}
if((s.currentURL.indexOf('/eda-simulator/')>-1) || (s.currentURL.indexOf('/edalink/')>-1) || (s.getQueryParam('ref') == 'es')) {s.prop30="EDA Simulator Link";s.prop31="S7 HDL Code Generation and Verification";}
if((s.currentURL.indexOf('/ide-link/')>-1) || (s.currentURL.indexOf('/edalink/')>-1) || (s.getQueryParam('ref') == 'ei')) {s.prop30="Embedded IDE Link";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/filterhdl/')>-1) || (s.currentURL.indexOf('/hdlfilter/')>-1) || (s.getQueryParam('ref') == 'fh')) {s.prop30="Filter Design HDL Coder";s.prop31="S7 HDL Code Generation and Verification";}
if((s.currentURL.indexOf('/filterdesign/')>-1) || (s.getQueryParam('ref') == 'qz')) {s.prop30="Filter Design Toolbox";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/derivatives/')>-1) || (s.currentURL.indexOf('/finderiv/')>-1) || (s.getQueryParam('ref') == 'de')) {s.prop30="Financial Derivatives Toolbox";s.prop31="V6 Computational Finance";}
if((s.currentURL.indexOf('/finance/')>-1) || (s.getQueryParam('ref') == 'fi')) {s.prop30="Financial Toolbox";s.prop31="V6 Computational Finance";}
if((s.currentURL.indexOf('/fixedincome/')>-1) || (s.currentURL.indexOf('/finfixed/')>-1) || (s.getQueryParam('ref') == 'fx')) {s.prop30="Fixed-Income Toolbox";s.prop31="V6 Computational Finance";}
if((s.currentURL.indexOf('/fixed/')>-1) || (s.currentURL.indexOf('/fixedpoint/')>-1) || (s.getQueryParam('ref') == 'po')) {s.prop30="Fixed-Point Toolbox";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/fuzzylogic/')>-1) || (s.currentURL.indexOf('/fuzzy/')>-1) || (s.getQueryParam('ref') == 'fl')) {s.prop30="Fuzzy Logic Toolbox";s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/gauges/')>-1) || (s.getQueryParam('ref') == 'dg')) {s.prop30="Gauges Blockset";s.prop31="S1 Simulink and Stateflow";}
if((s.currentURL.indexOf('/global-optimization/')>-1) || (s.currentURL.indexOf('/gads/')>-1) || (s.getQueryParam('ref') == 'gd')) {s.prop30="Global Optimization Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/iec-61508/')>-1) || (s.currentURL.indexOf('/certkitiec/')>-1) || (s.getQueryParam('ref') == 'ie')) {s.prop30="IEC Certification  Kit";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/imaq/')>-1) || (s.getQueryParam('ref') == 'ia')) {s.prop30="Image Acquisition Toolbox";s.prop31="V3 Image and Video Processing";}
if((s.currentURL.indexOf('/image/')>-1) || (s.currentURL.indexOf('/images/')>-1) || (s.getQueryParam('ref') == 'ip')) {s.prop30="Image Processing Toolbox";s.prop31="V3 Image and Video Processing";}
if((s.currentURL.indexOf('/instrument/')>-1) || (s.getQueryParam('ref') == 'ic')) {s.prop30="Instrument Control Toolbox";s.prop31="V4 Test and Measurement";}
if((s.currentURL.indexOf('/mapping/')>-1) || (s.currentURL.indexOf('/map/')>-1) || (s.getQueryParam('ref') == 'mg')) {s.prop30="Mapping Toolbox";s.prop31="V3 Image and Video Processing";}
if((s.currentURL.indexOf('/matlab/')>-1) || (s.currentURL.indexOf('/techdoc')>-1) || (s.getQueryParam('ref') == 'ml')) {s.prop30="MATLAB";s.prop31="M1 MATLAB";}
if((s.currentURL.indexOf('/matlabxl/')>-1) || (s.getQueryParam('ref') == 'eb')) {s.prop30="MATLAB Builder EX";s.prop31="M3 Application Deployment";}
if((s.currentURL.indexOf('/javabuilder/')>-1) || (s.getQueryParam('ref') == 'mj')) {s.prop30="MATLAB Builder JA";s.prop31="M3 Application Deployment";}
if((s.currentURL.indexOf('/netbuilder/')>-1) || (s.currentURL.indexOf('/dotnetbuilder/')>-1) || (s.getQueryParam('ref') == 'mn')) {s.prop30="MATLAB Builder NE";s.prop31="M3 Application Deployment";}
if((s.currentURL.indexOf('/compiler/')>-1) || (s.getQueryParam('ref') == 'co')) {s.prop30="MATLAB Compiler";s.prop31="M3 Application Deployment";}
if((s.currentURL.indexOf('/distriben/')>-1) || (s.currentURL.indexOf('/mdce/')>-1) || (s.getQueryParam('ref') == 'dw')) {s.prop30="MATLAB Distributed Computing Server";s.prop31="M4 Parallel Computing";}
if((s.currentURL.indexOf('/ml_reportgenerator/')>-1) || (s.currentURL.indexOf('/rptgen/')>-1) || (s.getQueryParam('ref') == 'mr')) {s.prop30="MATLAB Report Generator";s.prop31="M1 MATLAB";}
if((s.currentURL.indexOf('/mpc/')>-1) || (s.getQueryParam('ref') == 'mp')) {s.prop30="Model Predictive Control Toolbox";s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/mbc/')>-1) || (s.getQueryParam('ref') == 'mb')) {s.prop30="Model-Based Calibration Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/neuralnet/')>-1) || (s.currentURL.indexOf('/nnet/')>-1) || (s.getQueryParam('ref') == 'nn')) {s.prop30="Neural Network Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/opc/')>-1) || (s.getQueryParam('ref') == 'ot')) {s.prop30="OPC Toolbox";s.prop31="V4 Test and Measurement";}
if((s.currentURL.indexOf('/optimization/')>-1) || (s.currentURL.indexOf('/optim/')>-1) || (s.getQueryParam('ref') == 'op')) {s.prop30="Optimization Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/parallel-computing/')>-1) || (s.currentURL.indexOf('/distcomp/')>-1) || (s.getQueryParam('ref') == 'dm')) {s.prop30="Parallel Computing Toolbox";s.prop31="M4 Parallel Computing";}
if((s.currentURL.indexOf('/pde/')>-1) || (s.getQueryParam('ref') == 'pd')) {s.prop30="Partial Differential Equation Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
// BEGIN PolySpace products. Without a documentation URL to reference. If related doc is published, update this or make doc URL contain same product dir name.
if((s.currentURL.indexOf('/polyspaceclientada/')>-1) || (s.getQueryParam('ref') == 'pa')) {s.prop30="PolySpace Client for Ada";s.prop31="P1 PolySpace Embedded Code Verification";}
if((s.currentURL.indexOf('/polyspaceclientc/')>-1) || (s.getQueryParam('ref') == 'pc')) {s.prop30="PolySpace Client for C/C++";s.prop31="P1 PolySpace Embedded Code Verification";}
if((s.currentURL.indexOf('/polyspacemodelsl/')>-1) || (s.getQueryParam('ref') == 'pg')) {s.prop30="PolySpace Model Link SL";s.prop31="P1 PolySpace Embedded Code Verification";}
if((s.currentURL.indexOf('/polyspacemodeltl/')>-1) || (s.getQueryParam('ref') == 'ph')) {s.prop30="PolySpace Model Link TL";s.prop31="P1 PolySpace Embedded Code Verification";}
if((s.currentURL.indexOf('/polyspaceserverada/')>-1) || (s.getQueryParam('ref') == 'pf')) {s.prop30="PolySpace Server for Ada";s.prop31="P1 PolySpace Embedded Code Verification";}
if((s.currentURL.indexOf('/polyspaceserverc/')>-1) || (s.getQueryParam('ref') == 'pb')) {s.prop30="PolySpace Server for C/C++";s.prop31="P1 PolySpace Embedded Code Verification";}
if((s.currentURL.indexOf('/polyspaceumlrh/')>-1) || (s.getQueryParam('ref') == 'pi')) {s.prop30="PolySpace UML Link RH";s.prop31="P1 PolySpace Embedded Code Verification";}
// END PolySpace products
if((s.currentURL.indexOf('/rtwt/')>-1) || (s.currentURL.indexOf('/rtwin/')>-1) || (s.getQueryParam('ref') == 'wt')) {s.prop30="Real-Time Windows Target";s.prop31="S4 Rapid Prototyping and HIL Simulation";}
if((s.currentURL.indexOf('/rtw/')>-1) || (s.getQueryParam('ref') == 'rt')) {s.prop30="Real-Time Workshop";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/rtwembedded/')>-1) || (s.currentURL.indexOf('/ecoder/')>-1) || (s.getQueryParam('ref') == 'ec')) {s.prop30="Real-Time Workshop Embedded Coder";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/rfblockset/')>-1) || (s.currentURL.indexOf('/rfblks/')>-1) || (s.getQueryParam('ref') == 'rb')) {s.prop30="RF Blockset";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/rftoolbox/')>-1) || (s.currentURL.indexOf('/rf/')>-1) || (s.getQueryParam('ref') == 'rf')) {s.prop30="RF Toolbox";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/robust/')>-1) || (s.getQueryParam('ref') == 'rc')) {s.prop30="Robust Control Toolbox";s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/sigprocblockset/')>-1) || (s.currentURL.indexOf('/dspblks/')>-1) || (s.getQueryParam('ref') == 'ds')) {s.prop30="Signal Processing Blockset";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/signal/')>-1) || (s.getQueryParam('ref') == 'sg')) {s.prop30="Signal Processing Toolbox";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/simbiology/')>-1) || (s.currentURL.indexOf('/simbio/')>-1) || (s.getQueryParam('ref') == 'sb')) {s.prop30="SimBiology";s.prop31="V5 Computational Biology";}
if((s.currentURL.indexOf('/simdrive/')>-1) || (s.currentURL.indexOf('/physmod/drive/')>-1) || (s.getQueryParam('ref') == 'ld')) {s.prop30="SimDriveline";s.prop31="S3 Physical Modeling";}
if((s.currentURL.indexOf('/simelectronics/')>-1) || (s.currentURL.indexOf('/physmod/elec/')>-1) || (s.getQueryParam('ref') == 'sn')) {s.prop30="SimElectronics";s.prop31="S3 Physical Modeling";}
if((s.currentURL.indexOf('/simevents/')>-1) || (s.getQueryParam('ref') == 'se')) {s.prop30="SimEvents";s.prop31="S2 Discrete Event Simulation";}
if((s.currentURL.indexOf('/simhydraulics/')>-1) || (s.currentURL.indexOf('/physmod/hydro/')>-1) || (s.getQueryParam('ref') == 'sh')) {s.prop30="SimHydraulics";s.prop31="S3 Physical Modeling";}
if((s.currentURL.indexOf('/simmechanics/')>-1) || (s.currentURL.indexOf('/physmod/mech/')>-1) || (s.getQueryParam('ref') == 'ms')) {s.prop30="SimMechanics";s.prop31="S3 Physical Modeling";}
if((s.currentURL.indexOf('/simpower/')>-1) || (s.currentURL.indexOf('/physmod/powersys/')>-1) || (s.getQueryParam('ref') == 'ps')) {s.prop30="SimPowerSystems";s.prop31="S3 Physical Modeling";}
if((s.currentURL.indexOf('/simscape/')>-1) || (s.getQueryParam('ref') == 'ss')) {s.prop30="Simscape";s.prop31="S3 Physical Modeling";}
if((s.currentURL.indexOf('/simulink/')>-1) || (s.getQueryParam('ref') == 'sl')) {s.prop30="Simulink";s.prop31="S1 Simulink and Stateflow";}
if((s.currentURL.indexOf('/3d-animation/')>-1) || (s.currentURL.indexOf('/sl3d/')>-1) || (s.getQueryParam('ref') == 'vr')) {s.prop30="Simulink 3D Animation";s.prop31="S1 Simulink and Stateflow";}
if((s.currentURL.indexOf('/simcontrol/')>-1) || (s.currentURL.indexOf('/slcontrol/')>-1) || (s.getQueryParam('ref') == 'sd')) {s.prop30="Simulink Control Design";s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/sl-design-optimization/')>-1) || (s.currentURL.indexOf('/sldo/')>-1) || (s.getQueryParam('ref') == 'so')) {s.prop30="Simulink Design Optimization";s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/sldesignverifier/')>-1) || (s.currentURL.indexOf('/sldv/')>-1) || (s.getQueryParam('ref') == 'dv')) {s.prop30="Simulink Design Verifier";s.prop31="S5 Model Verification and Validation";}
if((s.currentURL.indexOf('/simfixed/')>-1) || (s.currentURL.indexOf('/fixpoint/')>-1) || (s.getQueryParam('ref') == 'fp')) {s.prop30="Simulink Fixed Point";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/slhdlcoder/')>-1) || (s.getQueryParam('ref') == 'hd')) {s.prop30="Simulink HDL Coder";s.prop31="S7 HDL Code Generation and Verification";}
if((s.currentURL.indexOf('/sl-plc-coder/')>-1) || (s.currentURL.indexOf('/plccoder/')>-1) || (s.getQueryParam('ref') == 'pl')) {s.prop30="Simulink PLC Coder";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/sl_reportgenerator/')>-1) || (s.currentURL.indexOf('/rptgenext/')>-1) || (s.getQueryParam('ref') == 'sr')) {s.prop30="Simulink Report Generator";s.prop31="S1 Simulink and Stateflow";}
if((s.currentURL.indexOf('/simverification/')>-1) || (s.currentURL.indexOf('/slvnv/')>-1) || (s.getQueryParam('ref') == 'vv')) {s.prop30="Simulink Verification and Validation";s.prop31="S5 Model Verification and Validation";}
if((s.currentURL.indexOf('/splines/')>-1) || (s.getQueryParam('ref') == 'sp')) {s.prop30="Spline Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/excellink/')>-1) || (s.currentURL.indexOf('/exlink/')>-1) || (s.getQueryParam('ref') == 'el')) {s.prop30="Spreadsheet Link EX";s.prop31="M3 Application Deployment";}
if((s.currentURL.indexOf('/stateflow/')>-1) || (s.getQueryParam('ref') == 'sf')) {s.prop30="Stateflow";s.prop31="S1 Simulink and Stateflow";}
if((s.currentURL.indexOf('/sfcoder/')>-1) || (s.getQueryParam('ref') == 'sc')) {s.prop30="Stateflow Coder";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/statistics/')>-1) || (s.currentURL.indexOf('/stats/')>-1) || (s.getQueryParam('ref') == 'st')) {s.prop30="Statistics Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/symbolic/')>-1) || (s.getQueryParam('ref') == 'sm')) {s.prop30="Symbolic Math Toolbox";s.prop31="M2 Math, Statistics, and Optimization";}
if((s.currentURL.indexOf('/sysid/')>-1) || (s.currentURL.indexOf('/ident/')>-1) || (s.getQueryParam('ref') == 'id')) {s.prop30="System Identification Toolbox";s.prop31="V1 Control Systems";}
if((s.currentURL.indexOf('/systemtest/')>-1) || (s.getQueryParam('ref') == 'sy')) {s.prop30="SystemTest";s.prop31="S5 Model Verification and Validation";}
if((s.currentURL.indexOf('/target-package/')>-1) || (s.currentURL.indexOf('/targetsupport/')>-1) || (s.getQueryParam('ref') == 'ts')) {s.prop30="Target Support Package";s.prop31="S6 Embedded Code Generation and Verification";}
if((s.currentURL.indexOf('/vehicle-network/')>-1) || (s.currentURL.indexOf('/vnt/')>-1) || (s.getQueryParam('ref') == 'vn')) {s.prop30="Vehicle Network Toolbox";s.prop31="V4 Test and Measurement";}
if((s.currentURL.indexOf('/viprocessing/')>-1) || (s.currentURL.indexOf('/vipblks/')>-1) || (s.getQueryParam('ref') == 'vp')) {s.prop30="Video and Image Processing Blockset";s.prop31="V3 Image and Video Processing";}
if((s.currentURL.indexOf('/wavelet/')>-1) || (s.getQueryParam('ref') == 'wa')) {s.prop30="Wavelet Toolbox";s.prop31="V2 Signal Processing and Communications";}
if((s.currentURL.indexOf('/xpctarget/')>-1) || (s.currentURL.indexOf('/xpc/')>-1) || (s.getQueryParam('ref') == 'xp')) {s.prop30="xPC Target";s.prop31="S4 Rapid Prototyping and HIL Simulation";}
if((s.currentURL.indexOf('/xpcembedded/')>-1) || (s.getQueryParam('ref') == 'xe')) {s.prop30="xPC Target Embedded Option";s.prop31="S4 Rapid Prototyping and HIL Simulation";}
if((s.currentURL.indexOf('/student_version/')>-1) || (s.getQueryParam('ref') == 'sv')) {s.prop30="MATLAB & Simulink Student Version";s.prop31="MATLAB & SIMULINK Student Version";}

//Copy product name propN(30) to eVarN(30)
if(s.prop30) {s.eVar30=s.prop30;}
if(s.prop31) {s.eVar31=s.prop31;}


// The following sets lead generator type into eVarN(33) and propN(33)
s.leadGenerator({leg_evar:['eVar33'],leg_prop:['prop33'],
leg_arr:[
['events','event1','Trial Requested'],
['events','event2','Seminar Confirmed'],
['events','event3','Quote Requested'],
['events','event4','Product Downloaded'],
['events','event6','Training Brochure Requested'],
['events','event7','Contacted Training'],
['events','event8','Contacted Sales'],
['events','event16','Emailed Page'],
['events','event18','Tech Kit Requested'],
['events','event19','Rec Webinar Confirmed'],
['events','event26','Trial Downloaded'],
['events','event33','Sales Quote Requested'],
['events','event34','Live Webinar Registration'],
//['events','event35','Site Search'],
//['events','event36','Adv Site Search'],
['events','event40','Video Contact Sales'],
['events','event41','Video Request Trial'],
['events','event42','Video Request Training'],
['events','event45','Code Request']
]
});

// The following sets artifact type into propN(32)
var prop4_URL=s.prop4.toLowerCase();
if(s.prop30) {
if((s.currentURL.search('/products/')>-1) && (prop4_URL.search('index.html')>-1)) {s.prop32="product_main";}
else if((s.currentURL.search('/products/')>-1) && (prop4_URL.search('index.html') != 'index.html')) {s.prop32="product_info";}
if((s.currentURL.search('/techkits/')>-1) && (s.getQueryParam('ref') != '')) {s.prop32="tech_kit";}
if((s.currentURL.search('/demos/')>-1) || (s.currentURL.search('demos')>-1)) {s.prop32="demo";}
if((s.currentPageName.search('video')>-1)) {s.prop32="video";}
if((s.currentURL.search('/access/')>-1) && (s.currentURL.search('/help/')>-1) ) {s.prop32="documentation";}
if((s.currentURL.search('/userstories')>-1) || (s.currentURL.search('/user_stories/')>-1) ) {s.prop32="user_stories";}
if(s.prop33) {s.prop32="lead_generator";}
}
var hold_product=s.getPreviousValue(s.prop30,'gpv_p30','');
if(!s.prop30) {
if((s.currentURL.search('/webinars/')>-1) || (s.currentURL.search('/webex/recordings/')>-1)) {s.prop32="webinar"; s.prop30=hold_product;}
}

// Now copy artifact type to eVarN(32)
if(s.prop32) {s.eVar32=s.prop32;}

// The following sets artifact URL into propN(34) and artifact name into propN(35)
if(s.prop30) {s.prop34=s.currentURL; s.prop35=s.currentPageName;}

// END Product artifacts development code


}
s.doPlugins=s_doPlugins

s.getFolderName=new Function("n",""
+"var p=s.wd.location.pathname.substring(0, document.location.pathname.lastIndexOf('/') + 1),pa=p.split('/');if(pa[0]==''){for(var "
+"i=0;i<pa.length;i++){pa[i]=i!=pa.length?pa[i+1]:null;}}return n?pa["
+"parseInt(n)-1]:'';");

s.getPageName=new Function(""
+"var s=this,pn=(s.siteID&&(''+s.siteID).length>0)?''+s.siteID:"
+"'',l=location,dp=(s.defaultPage)?''+s.defaultPage:'',e="
+"(s.pathExcludeDelim)?s.pathExcludeDelim:'',cs=(s.pathConcatDelim)?"
+"s.pathConcatDelim:'',q=l.search.substring(1),"
+"p=l.pathname.substring(1),x=p.indexOf(e);p=((x<0)?p:p.substring(0,"
+"x)).split('/');for(j=0;j<p.length;j++){if(p[j].length>0){if(pn."
+"length>0)pn+=cs;pn+=p[j]}else{if(dp.length>0){if(pn.length>0)pn+="
+"cs;pn+=dp}}}if(q.length>0){if(s.queryVarsList){var qpa=new Array()"
+",qv=s.split(s.queryVarsList,','),qp=s.split(q,'&'),tmp,idx;for(i="
+"0;i<qp.length;i++){tmp=s.split(qp[i],'=');qpa[i]=tmp[0]}for(i=0;"
+"i<qv.length;i++){idx=s.ia(qpa,qv[i]);if(idx>=0){if(pn.length"
+">0)pn+=cs;pn+=qp[idx]}}}}return pn");
s.split=new Function("str","sep",""
+"var si=0,sa=new Array(),i;while((str.length>0)&&(sep.length>0)){"
+"i=str.indexOf(sep);if((!i)&&(sep!=str.substring(0,sep.length)))"
+"break;if(i==-1){sa[si++] = str;break;}sa[si++]=str.substring(0,i);"
+"str=str.substring(i+sep.length,str.length)}return sa");
s.ia=new Function("ar","v",""
+"for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");

s.getQueryParam=new Function("qp","d",""
+"var s=this,v='',i,t;d=d?d:'';while(qp){i=qp.indexOf(',');i=i<0?qp.l"
+"ength:i;t=s.gcgi(qp.substring(0,i));if(t)v+=v?d+t:t;qp=qp.substring"
+"(i==qp.length?i:i+1)}return v");
s.gcgi=new Function("k",""
+"var v='',s=this;if(k&&s.wd.location.search){var q=s.wd.location.sea"
+"rch.toLowerCase(),qq=q.indexOf('?');q=qq<0?q:q.substring(qq+1);v=s."
+"pt(q,'&','cgif',k.toLowerCase())}return v");
s.cgif=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),sk=i<0?t:t.substring(0,i),sv=i<0?"
+"'True':t.substring(i+1);if(sk.toLowerCase()==k)return s.epa(sv)}ret"
+"urn ''");

s.getNewRepeat=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
+"n 'Repeat';");

s.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}");

s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

s.getAndPersistValue=new Function("v","c","e",""
	+"var s=this,a=new Date;"
	+"e=e?e:0;"
	+"a.setTime(a.getTime()+e*86400000);"
	+"if(v)s.c_w(c,v,e?a:0);"
	+"return s.c_r(c);");

s.getDaysSinceLastVisit=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),c='s_lastvisit',day=24*"
+"60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);if(!cval){s.c_w(c,"
+"ct,e);return 'First page view or cookies not supported';}else{var d"
+"=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);return 'More t"
+"han 30 days';}if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);return 'More "
+"than 7 days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return 'Less tha"
+"n 7 days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 day';}}els"
+"e return '';}");

s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

s.productGroup=new Function("o",""
+"var s=this;for(var i in o.pog_arr){if(s[o.pog_arr[i][0]]==o.pog_arr"
+"[i][1]){for(ath=2;ath<o.pog_arr[i].length;ath++){s[o.pog_evar [ath-"
+"2]]=o.pog_arr[i][ath];s[o.pog_prop[ath-2]]=o.pog_arr[i][ath];}}}");

s.leadGenerator=new Function("o",""
+"var s=this;for(var i in o.leg_arr){if(s[o.leg_arr[i][0]]==o.leg_arr"
+"[i][1]){for(ath=2;ath<o.leg_arr[i].length;ath++){s[o.leg_evar [ath-"
+"2]]=o.leg_arr[i][ath];s[o.leg_prop[ath-2]]=o.leg_arr[i][ath];}}}");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_objectID;function s_c2fe(f){var x='',s=0,e,a,b,c;while(1){e=
f.indexOf('"',s);b=f.indexOf('\\',s);c=f.indexOf("\n",s);if(e<0||(b>=
0&&b<e))e=b;if(e<0||(c>=0&&c<e))e=c;if(e>=0){x+=(e>s?f.substring(s,e):
'')+(e==c?'\\n':'\\'+f.substring(e,e+1));s=e+1}else return x
+f.substring(s)}return f}function s_c2fa(f){var s=f.indexOf('(')+1,e=
f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')
a+='","';else if(("\n\r\t ").indexOf(c)<0)a+=c;s++}return a?'"'+a+'"':
a}function s_c2f(cc){cc=''+cc;var fc='var f=new Function(',s=
cc.indexOf(';',cc.indexOf('{')),e=cc.lastIndexOf('}'),o,a,d,q,c,f,h,x
fc+=s_c2fa(cc)+',"var s=new Object;';c=cc.substring(s+1,e);s=
c.indexOf('function');while(s>=0){d=1;q='';x=0;f=c.substring(s);a=
s_c2fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(
q){if(h==q&&!x)q='';if(h=='\\')x=x?0:1;else x=0}else{if(h=='"'||h=="'"
)q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)
+'new Function('+(a?a+',':'')+'"'+s_c2fe(c.substring(o+1,e))+'")'
+c.substring(e+1);s=c.indexOf('function')}fc+=s_c2fe(c)+';return s");'
eval(fc);return f}function s_gi(un,pg,ss){var c="function s_c(un,pg,s"
+"s){var s=this;s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s."
+"wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.w"
+"d.s_c_in++;s.m=function(m){return (''+m).indexOf('{')<0};s.fl=funct"
+"ion(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)r"
+"eturn o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.i"
+"ndexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for"
+"(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1"
+"))<0)return 0;return 1};s.rep=function(x,o,n){var i=x.indexOf(o),l="
+"n.length>0?n.length:1;while(x&&i>=0){x=x.substring(0,i)+n+x.substri"
+"ng(i+o.length);i=x.indexOf(o,i+l)}return x};s.ape=function(x){var s"
+"=this,i;x=x?s.rep(escape(''+x),'+','%2B'):x;if(x&&s.charSet&&s.em=="
+"1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>="
+"0){i++;if(('89ABCDEFabcdef').indexOf(x.substring(i,i+1))>=0)return "
+"x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}return x}"
+";s.epa=function(x){var s=this;return x?unescape(s.rep(''+x,'+',' ')"
+"):x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.ind"
+"exOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s.m(f)?s[f](t,a):f(t,"
+"a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.leng"
+"th?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0"
+")a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);retu"
+"rn (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf"
+"',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s"
+"=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.c_d='';s.c_gdf=f"
+"unction(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=func"
+"tion(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriod"
+"s,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n"
+"=n>2?n:2;p=d.lastIndexOf('.');while(p>=0&&n>1){p=d.lastIndexOf('.',"
+"p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}return s"
+".c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,"
+"i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.su"
+"bstring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w"
+"=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;"
+"l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''"
+"?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*100"
+"0))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; pa"
+"th=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' do"
+"main='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f"
+"){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Arra"
+"y;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}"
+"if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x"
+".b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=fu"
+"nction(f,a,t,o,b){var s=this,r;if(s.apv>=5&&(!s.isopera||s.apv>=7))"
+"eval('try{r=s.m(f)?s[f](a):f(a)}catch(e){r=s.m(t)?s[t](e):t(e)}');e"
+"lse{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s.m(b)?s[b](a):b(a);else"
+"{s.eh(s.wd,'onerror',0,o);r=s.m(f)?s[f](a):f(a);s.eh(s.wd,'onerror'"
+",1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
+"oe=new Function('e','var s=s_c_il['+s._in+'];s.eh(window,\"onerror"
+"\",1);s.etfs=1;var c=s.t();if(c)s.d.write(c);s.etfs=0;return true')"
+";s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this"
+",p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.ho"
+"st==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=func"
+"tion(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtf"
+"sf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.ca=function()"
+"{var s=this,imn='s_i_'+s.fun;if(s.d.images&&s.apv>=3&&(!s.isopera||"
+"s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){s.ios=1;if(!s.d.images[imn]&&(!s."
+"isns||(s.apv<4||s.apv>=5))){s.d.write('<im'+'g name=\"'+imn+'\" hei"
+"ght=1 width=1 border=0 alt=\"\">');if(!s.d.images[imn])s.ios=0}}};s"
+".mr=function(sess,q,ta){var s=this,ns=s.visitorNamespace,unc=s.rep("
+"s.fun,'_','-'),imn='s_i_'+s.fun,im,b,e,rs='http'+(s.ssl?'s':'')+':/"
+"/'+(ns?ns:(s.ssl?'102':unc))+'.112.2O7.net/b/ss/'+s.un+'/1/H.5-pdv-"
+"2/'+sess+'?[AQB]&ndh=1'+(q?q:'')+(s.q?s.q:'')+'&[AQE]';if(s.isie&&!"
+"s.ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(s.i"
+"os){if (!s.ss)s.ca();im=s.wd[imn]?s.wd[imn]:s.d.images[imn];if(!im)"
+"im=s.wd[imn]=new Image;im.src=rs;if(rs.indexOf('&pe=')>=0&&(!ta||ta"
+"=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;wh"
+"ile(e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'"
+"g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=func"
+"tion(v){var s=this;return s.wd['s_'+v]};s.glf=function(t,a){if(t.su"
+"bstring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]="
+"v};s.gl=function(v){var s=this;s.pt(v,',','glf',0)};s.gv=function(v"
+"){var s=this;return s['vpm_'+v]?s['vpv_'+v]:(s[v]?s[v]:'')};s.havf="
+"function(t,a){var s=this,b=t.substring(0,4),x=t.substring(4),n=pars"
+"eInt(x),k='g_'+t,m='vpm_'+t,q=t,v=s.linkTrackVars,e=s.linkTrackEven"
+"ts;s[k]=s.gv(t);if(s.lnk||s.eo){v=v?v+','+s.vl_l:'';if(v&&!s.pt(v,'"
+",','isf',t))s[k]='';if(t=='events'&&e)s[k]=s.fs(s[k],e)}s[m]=0;if(t"
+"=='pageURL')q='g';else if(t=='referrer')q='r';else if(t=='vmk')q='v"
+"mt';else if(t=='charSet'){q='ce';if(s[k]&&s.em==2)s[k]='UTF-8'}else"
+" if(t=='visitorNamespace')q='ns';else if(t=='cookieDomainPeriods')q"
+"='cdp';else if(t=='cookieLifetime')q='cl';else if(t=='variableProvi"
+"der')q='vvp';else if(t=='currencyCode')q='cc';else if(t=='channel')"
+"q='ch';else if(t=='campaign')q='v0';else if(s.num(x)) {if(b=='prop'"
+")q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='hier'){q='h'+n;s[k]="
+"s.fl(s[k],255)}}if(s[k]&&t!='linkName'&&t!='linkType')s.qav+='&'+q+"
+"'='+s.ape(s[k]);return ''};s.hav=function(){var s=this;s.qav='';s.p"
+"t(s.vl_t,',','havf',0);return s.qav};s.lnf=function(t,h){t=t?t.toLo"
+"werCase():'';h=h?h.toLowerCase():'';var te=t.indexOf('=');if(t&&te>"
+"0&&h.indexOf(t.substring(te+1))>=0)return t.substring(0,te);return "
+"''};s.ln=function(h){var s=this,n=s.linkNames;if(n)return s.pt(n,',"
+"','lnf',h);return ''};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h"
+"=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,q"
+"i):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;retur"
+"n 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase("
+"):'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var "
+"s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s."
+"linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerC"
+"ase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return '"
+"d';if(s.trackExternalLinks&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',"
+"h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new"
+" Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.l"
+"nk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s."
+"bc=new Function('e','var s=s_c_il['+s._in+'],f;if(s.d&&s.d.all&&s.d"
+".all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;eval("
+"\"try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))"
+"s.t()}catch(f){}\");s.eo=0');s.ot=function(o){var a=o.type,b=o.tagN"
+"ame;return (a&&a.toUpperCase?a:b&&b.toUpperCase?b:o.href?'A':'').to"
+"UpperCase()};s.oid=function(o){var s=this,t=s.ot(o),p=o.protocol,c="
+"o.onclick,n='',x=0;if(!o.s_oid){if(o.href&&(t=='A'||t=='AREA')&&(!c"
+"||!p||p.toLowerCase().indexOf('javascript')<0))n=o.href;else if(c){"
+"n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),"
+"' ','');x=2}else if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x"
+"=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_"
+"oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf"
+"('='),u=e>=0?','+t.substring(0,e)+',':'';return u&&u.indexOf(','+un"
+"+',')>=0?s.epa(t.substring(e+1)):''};s.rq=function(un){var s=this,c"
+"=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf"
+"',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e="
+"t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0"
+")s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){"
+"var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_s"
+"q',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s"
+".pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)s.sqq"
+"[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&s.sqq[x"
+"]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_"
+"w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b="
+"s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links."
+"length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc."
+"indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl("
+"\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s"
+"=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attach"
+"Event)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventList"
+"ener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onloa"
+"d',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.v"
+"isitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new D"
+"ate,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!"
+"n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s."
+"dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s."
+"dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m"
+"){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',"
+"m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccoun"
+"tSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un."
+"toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase"
+")m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m)"
+";if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)"
+"};s.t=function(){var s=this,trk=1,tm=new Date,sed=Math&&Math.random"
+"?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Mat"
+"h.floor(tm.getTime()/10800000)%10+sed,yr=tm.getYear(),vt=tm.getDate"
+"()+'/'+tm.getMonth()+'/'+(yr<1900?yr+1900:yr)+' '+tm.getHours()+':'"
+"+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTime"
+"zoneOffset(),tfs=s.gtfs(),ta='',q='',qs='';s.uns();if(!s.q){var tl="
+"tfs.location,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc'"
+",'true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(s.apv>=4)x=screen.width+'"
+"x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){j='1.1';v=s.n.j"
+"avaEnabled()?'Y':'N';if(s.apv>=4){j='1.2';c=screen.pixelDepth;bw=s."
+"wd.innerWidth;bh=s.wd.innerHeight;if(s.apv>=4.06)j='1.3'}}s.pl=s.n."
+"plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';j="
+"'1.2';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offse"
+"tWidth;bh=s.d.documentElement.offsetHeight;j='1.3';if(!s.ismac&&s.b"
+"){s.b.addBehavior('#default#homePage');hp=s.b.isHomePage(tl)?\"Y\":"
+"\"N\";s.b.addBehavior('#default#clientCaps');ct=s.b.connectionType}"
+"}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].n"
+"ame,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.q=(x?'&s='+s.ape(x):''"
+")+(c?'&c='+s.ape(c):'')+(j?'&j='+j:'')+(v?'&v='+v:'')+(k?'&k='+k:''"
+")+(bw?'&bw='+bw:'')+(bh?'&bh='+bh:'')+(ct?'&ct='+s.ape(ct):'')+(hp?"
+"'&hp='+hp:'')+(p?'&p='+s.ape(p):'')}if(s.usePlugins)s.doPlugins(s);"
+"var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL"
+"=s.fl(l?l:'',255);if(!s.referrer)s.referrer=s.fl(r?r:'',255);if(s.l"
+"nk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.gv('pageNam"
+"e'),w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){"
+"while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentN"
+"ode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''"
+"+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<"
+"0)||oc.indexOf(\".tl(\")>=0)return ''}ta=o.target;h=o.href?o.href:'"
+"';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i)"
+";l=s.linkName?s.linkName:s.ln(h);t=s.linkType?s.linkType.toLowerCas"
+"e():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o'"
+")+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s"
+".trackInlineStats){if(!p){p=s.gv('pageURL');w=0}t=s.ot(o);i=o.sourc"
+"eIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)q"
+"s='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n"
+",100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&"
+"!qs)return '';var code='';if(trk&&s.vs(sed))code=s.mr(sess,(vt?'&t="
+"'+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq(s.un)),ta);s.sq(trk?'':qs);s."
+"lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID='';return code};s.tl"
+"=function(o,t,n){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n"
+";s.t()};s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https'"
+")>=0);s.d=document;s.b=s.d.body;s.n=navigator;s.u=s.n.userAgent;s.n"
+"s6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,i"
+"e=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera'"
+")>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s"
+".isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.index"
+"Of('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(i"
+"e>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloa"
+"t(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else"
+" s.apv=parseFloat(v);s.em=0;if(String.fromCharCode){i=escape(String"
+".fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?"
+"1:0))}s.un=un;s.uns();s.vl_l='vmk,charSet,visitorNamespace,cookieDo"
+"mainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode,p"
+"urchaseID';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType"
+",campaign,state,zip,events,products,linkName,linkType';for(var n=1;"
+"n<51;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n;s.vl_g=s.vl_t+',trac"
+"kDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQuerySt"
+"ring,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,"
+"linkNames';if(pg)s.gl(s.vl_g);s.ss=ss;if(!ss){s.wds();s.ca()}}",
l=window.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf(
'MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(l)for(i=0;i<l.length;i++){
s=l[i];s.uns();if(s.un==un)return s;else if(s.pt(s.un,',','isf',un)){
s=s.co(s);s.un=un;s.uns();return s}}if(e>0){a=parseInt(i=v.substring(e
+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10)
);else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf(
'Opera')<0){eval(c);return new s_c(un,pg,ss)}else s=s_c2f(c);return s(
un,pg,ss)}