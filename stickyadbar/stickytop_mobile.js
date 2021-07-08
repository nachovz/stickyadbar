var adUnitContainer = document.createElement('div');
adUnitContainer.id = 'generic_gpt-center';
adUnitContainer.setAttribute('class', 'sticky1-show');

var adUnitWrapper = document.createElement('div');
adUnitWrapper.id = 'container_pbs';
adUnitWrapper.setAttribute('class', 'show_container');

var stickyContainer = document.createElement('div');
stickyContainer.id = 'sticky-pbs-center';
stickyContainer.setAttribute('class', 'show-sticky');

var stickyStyles = document.createElement('style');
stickyStyles.innerHTML = '@media only screen and (max-width:729px){body{margin-top:57px}}#container_pbs{overflow:hidden;padding:0;margin:0 auto;min-height:0!important}#sticky-pbs-center{background:#fff;text-align:center;right:0;z-index:10000000;top:0;position:fixed;width:100%;box-shadow:0 0 5px 0 rgba(0,0,0,.2)!important}.show_container{height:57px}@media only screen and (min-width:730px){#sticky-pbs-center{display:none}}div#sticky-pbs-center .ngb_box{margin:0 auto!important;bottom:-2px;width:auto}';

adUnitWrapper.append(adUnitContainer);
stickyContainer.append(adUnitWrapper);
stickyContainer.append(stickyStyles);
document.body.append(stickyContainer);
