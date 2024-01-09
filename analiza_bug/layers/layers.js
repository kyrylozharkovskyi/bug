var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_satka_a_b_2 = new ol.format.GeoJSON();
var features_satka_a_b_2 = format_satka_a_b_2.readFeatures(json_satka_a_b_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_satka_a_b_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_satka_a_b_2.addFeatures(features_satka_a_b_2);
var lyr_satka_a_b_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_satka_a_b_2, 
                style: style_satka_a_b_2,
                interactive: true,
    title: 'satka_a_b<br />\
    <img src="styles/legend/satka_a_b_2_0.png" /> -85,68174 - -80<br />\
    <img src="styles/legend/satka_a_b_2_1.png" /> -80 - -60<br />\
    <img src="styles/legend/satka_a_b_2_2.png" /> -60 - -40<br />\
    <img src="styles/legend/satka_a_b_2_3.png" /> -40 - -20<br />\
    <img src="styles/legend/satka_a_b_2_4.png" /> -20 - 0<br />\
    <img src="styles/legend/satka_a_b_2_5.png" /> 0 - 20<br />\
    <img src="styles/legend/satka_a_b_2_6.png" /> 20 - 40<br />\
    <img src="styles/legend/satka_a_b_2_7.png" /> 40 - 60<br />\
    <img src="styles/legend/satka_a_b_2_8.png" /> 60 - 80<br />\
    <img src="styles/legend/satka_a_b_2_9.png" /> 80 - 100<br />\
    <img src="styles/legend/satka_a_b_2_10.png" /> 100 - 100,000021<br />'
        });
var format_santinel2_2022_3 = new ol.format.GeoJSON();
var features_santinel2_2022_3 = format_santinel2_2022_3.readFeatures(json_santinel2_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santinel2_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santinel2_2022_3.addFeatures(features_santinel2_2022_3);
var lyr_santinel2_2022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_santinel2_2022_3, 
                style: style_santinel2_2022_3,
                interactive: true,
                title: '<img src="styles/legend/santinel2_2022_3.png" /> santinel2_2022'
            });
var format_topograficzne_1990_4 = new ol.format.GeoJSON();
var features_topograficzne_1990_4 = format_topograficzne_1990_4.readFeatures(json_topograficzne_1990_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_topograficzne_1990_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_topograficzne_1990_4.addFeatures(features_topograficzne_1990_4);
var lyr_topograficzne_1990_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_topograficzne_1990_4, 
                style: style_topograficzne_1990_4,
                interactive: true,
                title: '<img src="styles/legend/topograficzne_1990_4.png" /> topograficzne_1990'
            });
var format_vmap_2002_5 = new ol.format.GeoJSON();
var features_vmap_2002_5 = format_vmap_2002_5.readFeatures(json_vmap_2002_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_2002_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_2002_5.addFeatures(features_vmap_2002_5);
var lyr_vmap_2002_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vmap_2002_5, 
                style: style_vmap_2002_5,
                interactive: true,
                title: '<img src="styles/legend/vmap_2002_5.png" /> vmap_2002'
            });
var format_historyczne_1940_6 = new ol.format.GeoJSON();
var features_historyczne_1940_6 = format_historyczne_1940_6.readFeatures(json_historyczne_1940_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historyczne_1940_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczne_1940_6.addFeatures(features_historyczne_1940_6);
var lyr_historyczne_1940_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_historyczne_1940_6, 
                style: style_historyczne_1940_6,
                interactive: true,
                title: '<img src="styles/legend/historyczne_1940_6.png" /> historyczne_1940'
            });

lyr_Positron_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_satka_a_b_2.setVisible(true);lyr_santinel2_2022_3.setVisible(true);lyr_topograficzne_1990_4.setVisible(true);lyr_vmap_2002_5.setVisible(true);lyr_historyczne_1940_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_GoogleSatellite_1,lyr_satka_a_b_2,lyr_santinel2_2022_3,lyr_topograficzne_1990_4,lyr_vmap_2002_5,lyr_historyczne_1940_6];
lyr_satka_a_b_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'historyczn': 'historyczn', 'topografic': 'topografic', 'b_a': 'b_a', });
lyr_santinel2_2022_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'compacness': 'compacness', });
lyr_topograficzne_1990_4.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'comparses': 'comparses', });
lyr_vmap_2002_5.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'zwartosci': 'zwartosci', });
lyr_historyczne_1940_6.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Field': 'Field', 'comper': 'comper', });
lyr_satka_a_b_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'historyczn': 'TextEdit', 'topografic': 'TextEdit', 'b_a': 'TextEdit', });
lyr_santinel2_2022_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'compacness': 'TextEdit', });
lyr_topograficzne_1990_4.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'comparses': 'TextEdit', });
lyr_vmap_2002_5.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'zwartosci': 'TextEdit', });
lyr_historyczne_1940_6.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Field': 'TextEdit', 'comper': 'TextEdit', });
lyr_satka_a_b_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'historyczn': 'no label', 'topografic': 'no label', 'b_a': 'no label', });
lyr_santinel2_2022_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'compacness': 'no label', });
lyr_topograficzne_1990_4.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'comparses': 'no label', });
lyr_vmap_2002_5.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'zwartosci': 'no label', });
lyr_historyczne_1940_6.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Field': 'no label', 'comper': 'no label', });
lyr_historyczne_1940_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});