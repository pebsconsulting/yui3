if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/axis-time/axis-time.js']) {
   __coverage__['build/axis-time/axis-time.js'] = {"path":"build/axis-time/axis-time.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":31,"loc":{"start":{"line":31,"column":22},"end":{"line":32,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":53,"column":58}},"2":{"start":{"line":19,"column":0},"end":{"line":49,"column":3}},"3":{"start":{"line":33,"column":8},"end":{"line":36,"column":18}},"4":{"start":{"line":37,"column":12},"end":{"line":37,"column":19}},"5":{"start":{"line":38,"column":8},"end":{"line":38,"column":37}},"6":{"start":{"line":39,"column":8},"end":{"line":46,"column":9}},"7":{"start":{"line":41,"column":12},"end":{"line":41,"column":33}},"8":{"start":{"line":45,"column":12},"end":{"line":45,"column":33}},"9":{"start":{"line":47,"column":8},"end":{"line":47,"column":21}}},"branchMap":{"1":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":8},"end":{"line":39,"column":8}},{"start":{"line":39,"column":8},"end":{"line":39,"column":8}}]},"2":{"line":39,"type":"binary-expr","locations":[{"start":{"line":39,"column":11},"end":{"line":39,"column":20}},{"start":{"line":39,"column":24},"end":{"line":39,"column":48}}]}},"code":["(function () { YUI.add('axis-time', function (Y, NAME) {","","/**"," * Provides functionality for drawing a time axis for use with a chart."," *"," * @module charts"," * @submodule axis-time"," */","/**"," * TimeAxis draws a time-based axis for a chart."," *"," * @class TimeAxis"," * @constructor"," * @extends Axis"," * @uses TimeImpl"," * @param {Object} config (optional) Configuration parameters."," * @submodule axis-time"," */","Y.TimeAxis = Y.Base.create(\"timeAxis\", Y.Axis, [Y.TimeImpl], {","    /**","     * Calculates and returns a value based on the number of labels and the index of","     * the current label.","     *","     * @method _getLabelByIndex","     * @param {Number} i Index of the label.","     * @param {Number} l Total number of labels.","     * @param {String} direction The direction of the axis. (vertical or horizontal)","     * @return String","     * @private","     */","    _getLabelByIndex: function(i, l, direction)","    {","        var min = this.get(\"minimum\"),","            max = this.get(\"maximum\"),","            increm,","            label;","            l -= 1;","        increm = ((max - min)/l) * i;","        if(direction && direction === \"vertical\")","        {","            label = max - increm;","        }","        else","        {","            label = min + increm;","        }","        return label;","    }","});","","","","}, '@VERSION@', {\"requires\": [\"axis\", \"axis-time-base\"]});","","}());"]};
}
var __cov_NIoKAV1h0fULE_RLRoh6Ig = __coverage__['build/axis-time/axis-time.js'];
__cov_NIoKAV1h0fULE_RLRoh6Ig.s['1']++;YUI.add('axis-time',function(Y,NAME){__cov_NIoKAV1h0fULE_RLRoh6Ig.f['1']++;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['2']++;Y.TimeAxis=Y.Base.create('timeAxis',Y.Axis,[Y.TimeImpl],{_getLabelByIndex:function(i,l,direction){__cov_NIoKAV1h0fULE_RLRoh6Ig.f['2']++;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['3']++;var min=this.get('minimum'),max=this.get('maximum'),increm,label;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['4']++;l-=1;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['5']++;increm=(max-min)/l*i;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['6']++;if((__cov_NIoKAV1h0fULE_RLRoh6Ig.b['2'][0]++,direction)&&(__cov_NIoKAV1h0fULE_RLRoh6Ig.b['2'][1]++,direction==='vertical')){__cov_NIoKAV1h0fULE_RLRoh6Ig.b['1'][0]++;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['7']++;label=max-increm;}else{__cov_NIoKAV1h0fULE_RLRoh6Ig.b['1'][1]++;__cov_NIoKAV1h0fULE_RLRoh6Ig.s['8']++;label=min+increm;}__cov_NIoKAV1h0fULE_RLRoh6Ig.s['9']++;return label;}});},'@VERSION@',{'requires':['axis','axis-time-base']});
