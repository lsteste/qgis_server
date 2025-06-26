var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tracado_1 = new ol.format.GeoJSON();
var features_tracado_1 = format_tracado_1.readFeatures(json_tracado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracado_1.addFeatures(features_tracado_1);
var lyr_tracado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracado_1, 
                style: style_tracado_1,
                popuplayertitle: 'tracado',
                interactive: true,
                title: '<img src="styles/legend/tracado_1.png" /> tracado'
            });
var format_pontos_criticos_2 = new ol.format.GeoJSON();
var features_pontos_criticos_2 = format_pontos_criticos_2.readFeatures(json_pontos_criticos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pontos_criticos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontos_criticos_2.addFeatures(features_pontos_criticos_2);
var lyr_pontos_criticos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pontos_criticos_2, 
                style: style_pontos_criticos_2,
                popuplayertitle: 'pontos_criticos',
                interactive: true,
                title: '<img src="styles/legend/pontos_criticos_2.png" /> pontos_criticos'
            });
var group_route_survey_serra_PENA = new ol.layer.Group({
                                layers: [lyr_tracado_1,lyr_pontos_criticos_2,],
                                fold: 'open',
                                title: 'route_survey_serra_PENA'});

lyr_GoogleSatellite_0.setVisible(true);lyr_tracado_1.setVisible(true);lyr_pontos_criticos_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_route_survey_serra_PENA];
lyr_tracado_1.set('fieldAliases', {'fid': 'fid', });
lyr_pontos_criticos_2.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'dap': 'dap', 'int_obs': 'int_obs', 'foto': 'foto', 'n_ponto_critico': 'n_ponto_critico', 'proprietario': 'proprietario', 'intervencao': 'intervencao', 'especie': 'especie', 'prop_nome': 'prop_nome', 'prop_morada': 'prop_morada', 'prop_contacto': 'prop_contacto', 'prop_obs': 'prop_obs', 'coord_geograficas': 'coord_geograficas', 'distrito': 'distrito', 'concelho': 'concelho', 'freguesia': 'freguesia', 'teste': 'teste', });
lyr_tracado_1.set('fieldImages', {'fid': '', });
lyr_pontos_criticos_2.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', 'dap': 'TextEdit', 'int_obs': 'TextEdit', 'foto': 'ExternalResource', 'n_ponto_critico': 'Range', 'proprietario': 'TextEdit', 'intervencao': 'TextEdit', 'especie': 'TextEdit', 'prop_nome': 'TextEdit', 'prop_morada': 'TextEdit', 'prop_contacto': 'TextEdit', 'prop_obs': 'TextEdit', 'coord_geograficas': 'TextEdit', 'distrito': 'TextEdit', 'concelho': 'TextEdit', 'freguesia': 'TextEdit', 'teste': '', });
lyr_tracado_1.set('fieldLabels', {'fid': 'no label', });
lyr_pontos_criticos_2.set('fieldLabels', {'fid': 'no label', 'tipo': 'no label', 'dap': 'no label', 'int_obs': 'no label', 'foto': 'no label', 'n_ponto_critico': 'header label - always visible', 'proprietario': 'inline label - visible with data', 'intervencao': 'inline label - visible with data', 'especie': 'header label - visible with data', 'prop_nome': 'no label', 'prop_morada': 'no label', 'prop_contacto': 'no label', 'prop_obs': 'no label', 'coord_geograficas': 'no label', 'distrito': 'no label', 'concelho': 'no label', 'freguesia': 'no label', 'teste': 'no label', });
lyr_pontos_criticos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});