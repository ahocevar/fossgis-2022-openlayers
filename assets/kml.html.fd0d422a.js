import"./modulepreload-polyfill.b7f2da20.js";/* empty css           */import{T as l,X as p,c,b as m,K as u,e as g,V as f}from"./vendor.1f0ba1e0.js";var y="https://ahocevar.net/fossgis-2022-openlayers/assets/2012-02-10.5beb64d9.kml",v="get_your_own_D6rA4zTHduk6KOKTXzGB",w='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',d=new l({source:new p({attributions:w,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+v,maxZoom:20})}),h=new c({source:new m({url:y,format:new u})}),r=new g({layers:[d,h],target:document.getElementById("map"),view:new f({center:[838407.352187509,5857024132774355e-9],projection:"EPSG:3857",zoom:14})}),s=function(t){var e=[];if(r.forEachFeatureAtPixel(t,function(i){e.push(i)}),e.length>0){var o=[],a,n;for(a=0,n=e.length;a<n;++a)e[a].get("name")&&o.push(e[a].get("name"));document.getElementById("info").innerHTML=o.join(", ")||"(unknown)",r.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="",r.getTarget().style.cursor=""};r.on("pointermove",function(t){if(!t.dragging){var e=r.getEventPixel(t.originalEvent);s(e)}});r.on("click",function(t){s(t.pixel)});
