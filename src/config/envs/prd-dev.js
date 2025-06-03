/**
 * @description dev 配置
 * @author 双越
 */

module.exports = {
  // mongodb 连接配置
  mongodbConf: {
    host: "host.docker.internal",
    port: "27016",
    dbName: "mw-cli-dev",
  },

  // access_log 日志文件目录，要和 nginx_conf/dev/event.conf 保持一致！
  //   accessLogPath: "home/work/immoc-lego/nginx_logs",
  accessLogPath: "home/work/immoc-lego/nginx_logs",

  // cors origin
  corsOrigin: "*",
};
