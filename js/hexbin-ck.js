!function(){d3.hexbin=function(){function i(e){var t={};return e.forEach(function(e,n){var s=h.call(i,e,n)/a,o=Math.round(s),f=c.call(i,e,n)/u-(1&o?.5:0),l=Math.round(f),p=s-o;if(3*Math.abs(p)>1){var d=f-l,v=l+(l>f?-1:1)/2,m=o+(o>s?-1:1),g=f-v,y=s-m;d*d+p*p>g*g+y*y&&(l=v+(1&o?1:-1)/2,o=m)}var b=l+"-"+o,w=t[b];w?w.push(e):(w=t[b]=[e],w.i=l,w.j=o,w.x=(l+(1&o?.5:0))*u,w.y=o*a)}),d3.values(t)}function s(t){var n=0,r=0;return e.map(function(e){var i=Math.sin(e)*t,s=-Math.cos(e)*t,o=i-n,u=s-r;return n=i,r=s,[o,u]})}var o,u,a,f=1,l=1,c=t,h=n;return i.x=function(e){return arguments.length?(c=e,i):c},i.y=function(e){return arguments.length?(h=e,i):h},i.hexagon=function(e){return arguments.length<1&&(e=o),"m"+s(e).join("l")+"z"},i.centers=function(){for(var e=[],t=0,n=!1,r=0;l+o>t;t+=a,n=!n,++r)for(var i=n?u/2:0,s=0;f+u/2>i;i+=u,++s){var c=[i,t];c.i=s,c.j=r,e.push(c)}return e},i.mesh=function(){var e=s(o).slice(0,4).join("l");return i.centers().map(function(t){return"M"+t+"m"+e}).join("")},i.size=function(e){return arguments.length?(f=+e[0],l=+e[1],i):[f,l]},i.radius=function(e){return arguments.length?(o=+e,u=2*o*Math.sin(Math.PI/3),a=1.5*o,i):o},i.radius(1)};var e=d3.range(0,2*Math.PI,Math.PI/3),t=function(e){return e[0]},n=function(e){return e[1]}}();