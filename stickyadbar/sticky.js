var adUnitContainer = document.createElement('div');
adUnitContainer.id = 'generic_gpt-center';
adUnitContainer.setAttribute('class', 'sticky1-show');

var stickyButton = document.createElement('button');
stickyButton.id = 'sticky-pbs-btn-center';
stickyButton.setAttribute('aria-label', 'Cerrar este anuncio');
//stickyButton.setAttribute('style', 'display: none; position: absolute; width: 28px; height: 28px; top: -27px; z-index: 2010; right: 0px; background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTMnIGhlaWdodD0nMTMnIHZpZXdCb3g9JzM0MSA4IDEzIDEzJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9JyM0RjRGNEYnIGQ9J00zNTQgOS4zMUwzNTIuNjkgOGwtNS4xOSA1LjE5TDM0Mi4zMSA4IDM0MSA5LjMxbDUuMTkgNS4xOS01LjE5IDUuMTkgMS4zMSAxLjMxIDUuMTktNS4xOSA1LjE5IDUuMTkgMS4zMS0xLjMxLTUuMTktNS4xOXonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg=="); background-size: 13px 13px; background-position: 9px center; background-color: rgb(255, 255, 255); background-repeat: no-repeat; box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 1px 0px; border: none; border-radius: 12px 0px 0px;');      

var adUnitWrapper = document.createElement('div');
adUnitWrapper.id = 'container_pbs';
adUnitWrapper.setAttribute('class', 'show_container');
//adUnitWrapper.setAttribute('style', 'overflow: hidden; padding: 0px; margin: 0px; min-height: 0px !important; display: flex !important;');


var stickyContainer = document.createElement('div');
stickyContainer.id = 'sticky-pbs-center';
stickyContainer.setAttribute('class', 'show-sticky');

adUnitWrapper.append(adUnitContainer);
adUnitWrapper.append(stickyButton);
stickyContainer.append(adUnitWrapper);
document.body.append(stickyContainer);

document.querySelector('#sticky-pbs-btn-center').addEventListener('click', function(e){
    document.querySelector('#sticky-pbs-center').className='hide-sticky';
},{ once: true});