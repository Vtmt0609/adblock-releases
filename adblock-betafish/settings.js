
const {LocalCDN} = require('./localcdn');
// OPTIONAL SETTINGS
function Settings()
{
  this._settingsKey = 'settings';
  this._defaults = {
    debug_logging : false,
    youtube_channel_whitelist : false,
    show_advanced_options : false,
    show_block_counts_help_link : true,
    show_survey : true,
    local_cdn : false,
    picreplacement : false,
  };
  var _this = this;
  this._init = new Promise(function(resolve)
  {
    chrome.storage.local.get(_this._settingsKey, function(response)
    {
      var settings = response.settings || {};
      _this._data = $.extend(_this._defaults, settings);
      if (settings.debug_logging)
      {
        logging(true);
      }
      if (settings.local_cdn)
      {
        LocalCDN.start();
      }

      resolve();
    });
  }).then(function()
  {
    log('\n===SETTINGS FINISHED LOADING===\n\n');
  });
}

Settings.prototype = {
  set : function(name, isEnabled, callback)
  {
    this._data[name] = isEnabled;
    var _this = this;

    // Don't store defaults that the user hasn't modified
    chrome.storage.local.get(this._settingsKey, function(response)
    {
      var storedData = response.settings || {};
      storedData[name] = isEnabled;
      chromeStorageSetHelper(_this._settingsKey, storedData);
      if (callback !== undefined && typeof callback === 'function')
      {
        callback();
      }
    });
  },

  get_all : function()
  {
    return this._data;
  },

  onload : function()
  {
    return this._init;
  },

};

var settings = new Settings();
settings.onload();

var getSettings = function()
{
  return settings.get_all();
};

var setSetting = function(name, isEnabled, callback)
{
  settings.set(name, isEnabled, callback);

  if (name === 'debug_logging')
  {
    logging(isEnabled);
  }
};

var disableSetting = function(name)
{
  settings.set(name, false);
};

// Attach methods to window
Object.assign(window, {
  disableSetting,
  getSettings,
  setSetting,
  settings
});