photo={page:1,offset:10,init:function(){var t=this;$.getJSON("../js/src/photos.json",function(i){t.render(t.page,i),t.scroll(i)})},render:function(i,t){var o=(i-1)*this.offset,n=i*this.offset;if(!(o>=t.length)){for(var s,a,e,r,c="",l=o;l<n&&l<t.length;l++)a=(s=t[l].split(" ")[1]).split(".")[0],r=(e=t[l].split(" ")[0]).split(".")[0],c+='<div class="card" style="width:330px"><div class="img-box" style="height:'+330*e.split(".")[1]/r+'px"><a data-fancybox="gallery" class="fancybox fancybox.image"  href="http://sakuratears.oss-cn-beijing.aliyuncs.com/blog/photos/'+s+'?raw=true" data-caption="'+a+'"><img src="http://sakuratears.oss-cn-beijing.aliyuncs.com/blog/photos/'+s+'?raw=true"/></a></div></div>';var g=$(".img-box-ul");g.append(c),g.lazyload(),this.minigrid()}},minigrid:function(){var i=new Minigrid({container:".img-box-ul",item:".card",gutter:12});i.mount(),$(window).resize(function(){i.mount()})},scroll:function(s){var a=this;$(window).scroll(function(){var i=window.pageYOffset,t=i+window.innerHeight,o=$("#ImageGrid"),n=o.offset().top+o.height();i<=n&&n<t+0&&a.render(++a.page,s)})}},photo.init();