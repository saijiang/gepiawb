import {Loading, Message} from 'element-ui'
import axios from 'axios'
import { tansParams, blobValidate } from "@/utils/puble";
import { saveAs } from 'file-saver'
import errorCode from '@/utils/errorCode'

const baseURL = process.env.VUE_APP_BASE_API
let downloadLoadingInstance;


    export default {
        zip(urls,name) {
            var url = baseURL + urls
            downloadLoadingInstance = Loading.service({ text: "正在下载数据，请稍候", spinner: "el-icon-loading", background: "rgba(0, 0, 0, 0.7)", })
            axios({
              method: 'post',
              url: url,
              responseType: 'blob',
              // headers: { 'Authorization': 'Bearer ' + getToken() }
            }).then((res) => {
              const isBlob = blobValidate(res.data);
              if (isBlob) {
                const blob = new Blob([res.data], { type: 'application/zip' })
                this.saveAs(blob, name)
              } else {
                this.printErrMsg(res.data);
              }
              downloadLoadingInstance.close();
            }).catch((r) => {
              console.error(r)
              Message.error('下载文件出现错误，请联系管理员！')
              downloadLoadingInstance.close();
            })
        },
        saveAs(text, name, opts) {
            saveAs(text, name, opts);
        },
        async printErrMsg(data) {
            const resText = await data.text();
            const rspObj = JSON.parse(resText);
            const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
            Message.error(errMsg);
        }
    }
