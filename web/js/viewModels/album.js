define(["ojs/ojcore","knockout","jquery","../spotify","ojs/ojchart"],function(e,a,t,r){function s(){var e=a.observable({}).subscribeTo("selectedAlbums",!0,function(e){return e[0]}),t=this;t.album=a.observable({loading:!0}),t.tracksLength=a.observableArray([]),r.fetchAlbumDetails(e().series).then(function(e){t.album({artist:e.artists[0].name,name:e.name,label:e.name,popularity:e.popularity,release:e.release_date,cover:e.images[0],loading:!1}),e.tracks.items.forEach(function(e){t.tracksLength.push({id:e.id,name:e.name,items:[Number(e.duration_ms)/1e3]})})})}return s});