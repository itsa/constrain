/**
 * Plugin making moveable elements to constrain within
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module constrain
 * @class Constrain
 * @since 0.0.1
*/

"use strict";
module.exports = function (window) {
    require('node-plugin')(window);

    var createHashMap = require('js-ext/extra/hashmap.js').createMap,
        PluginConstrain;

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', createHashMap());

/*jshint boss:true */
    if (PluginConstrain=window._ITSAmodules.PluginConstrain) {
/*jshint boss:false */
        return PluginConstrain;
    }

    window._ITSAmodules.PluginConstrain = PluginConstrain = window.document.definePlugin('constrain', null, {
            attrs: {
                selector: 'string'
            },
            defaults: {
                selector: 'window'
            }
        }
    );

    return PluginConstrain;
};