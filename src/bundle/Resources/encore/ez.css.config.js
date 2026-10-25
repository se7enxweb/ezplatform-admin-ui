const path = require('path');
const fs = require('fs');
// the assets package is installed as se7enxweb/ezplatform-admin-ui-assets (it replaces the ezsystems name)
const adminUiAssetsDir = ['./vendor/se7enxweb/ezplatform-admin-ui-assets', './vendor/ezsystems/ezplatform-admin-ui-assets']
    .map((dir) => path.resolve(dir))
    .find((dir) => fs.existsSync(dir)) || path.resolve('./vendor/ezsystems/ezplatform-admin-ui-assets');

module.exports = (Encore) => {
    Encore.addEntry('ezplatform-admin-ui-layout-css', [
        path.resolve(__dirname, '../public/scss/ezplatform-bootstrap.scss'),
        path.resolve(__dirname, '../public/scss/ezplatform.scss'),
        path.resolve(__dirname, '../public/scss/ui/ezplatform-modules.scss'),
        path.resolve(adminUiAssetsDir, 'Resources/public/vendors/flatpickr/dist/flatpickr.min.css'),
    ])
        .addEntry('ezplatform-admin-ui-content-edit-parts-css', [
            path.resolve(adminUiAssetsDir, 'Resources/public/vendors/leaflet/dist/leaflet.css'),
        ])
        .addEntry('ezplatform-admin-ui-location-view-css', [
            path.resolve(adminUiAssetsDir, 'Resources/public/vendors/leaflet/dist/leaflet.css'),
        ])
        .addEntry('ezplatform-admin-ui-security-base-css', [
            path.resolve(__dirname, '../public/scss/ezplatform-bootstrap.scss'),
            path.resolve(__dirname, '../public/scss/ezplatform.scss'),
        ]);
};
