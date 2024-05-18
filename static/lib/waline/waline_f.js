var yo = Object.defineProperty;
var wo = (e, t, n) =>t in e ? yo(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var je = (e, t, n) =>(wo(e, typeof t != "symbol" ? t + "": t, n), n),
bo = (e, t, n) =>{
    if (!t.has(e)) throw TypeError("Cannot " + n)
};
var _i = (e, t, n) =>{
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
};
var Rn = (e, t, n) =>(bo(e, t, "access private method"), n);
var Tn, Cr, bi, vo;
const Rr = {
    "Content-Type": "application/json"
},
Ge = e =>`${e.replace(/\/?$/, "/")}api/`,
yt = (e, t = "") =>{
    if (typeof e == "object" && e.errno) throw new TypeError(`${t}failed with${e.errno}:${e.errmsg}`);
    return e
},
Ci = ({
    serverURL: e,
    lang: t,
    paths: n,
    type: i,
    signal: r
}) =>fetch(`${Ge(e)}article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(i.join(","))}&lang=${t}`, {
    signal: r
}).then(s =>s.json()).then(s =>yt(s, "Get counter").data),
Sn = ({
    serverURL: e,
    lang: t,
    path: n,
    type: i,
    action: r
}) =>fetch(`${Ge(e)}article?lang=${t}`, {
    method: "POST",
    headers: Rr,
    body: JSON.stringify({
        path: n,
        type: i,
        action: r
    })
}).then(s =>s.json()).then(s =>yt(s, "Update counter").data),
/**Sr = ({
    serverURL: e,
    lang: t,
    path: n,
    page: i,
    pageSize: r,
    sortBy: s,
    signal: l,
    token: o
}) =>{
    const a = {};
    return o && (a.Authorization = `Bearer $ {
        o
    }`),
    fetch(`${Ge(e)}comment?path=${encodeURIComponent(n)}&pageSize=${r}&page=${i}&lang=${t}&sortBy=${s}`, {
        signal: l,
        headers: a
    })
},**/
Ar = ({
    serverURL: e,
    lang: t,
    token: n,
    comment: i
}) =>{
    const r = {
        "Content-Type": "application/json"
    };
    return n && (r.Authorization = `Bearer${n}`),
    fetch(`${Ge(e)}comment?lang=${t}`, {
        method: "POST",
        headers: r,
        body: JSON.stringify(i)
    }).then(s =>s.json())
},
Ir = ({
    serverURL: e,
    lang: t,
    token: n,
    objectId: i
}) =>fetch(`${Ge(e)}comment/${i}?lang = ${t}`, {
    method: "DELETE",
    headers: {
        Authorization: `Bearer $ {
            n
        }`
    }
}).then(r =>r.json()).then(r =>yt(r, "Delete comment")),
Zt = ({
    serverURL: e,
    lang: t,
    token: n,
    objectId: i,
    comment: r
}) =>fetch(`${Ge(e)}comment/${i}?lang=${t}`, {
    method: "PUT",
    headers: {...Rr,
        Authorization: `Bearer $ {
            n
        }`
    },
    body: JSON.stringify(r)
}).then(s =>s.json()).then(s =>yt(s, "Update comment")),
Lr = ({
    serverURL: e,
    lang: t,
    paths: n,
    signal: i
}) =>fetch(`${Ge(e)}comment?type=count&url=${encodeURIComponent(n.join(","))}&lang=${t}`, {
    signal: i
}).then(r =>r.json()).then(r =>yt(r, "Get comment count").data),
Mr = ({
    lang: e,
    serverURL: t
}) =>{
    const n = (window.innerWidth - 450) / 2,
    i = (window.innerHeight - 450) / 2,
    r = window.open(`${t.replace(/\/$/,"")}/ui/login?lng=${encodeURIComponent(e)}`,"_blank",`width=450,height=450,left=${n},top=${i},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
    return r == null || r.postMessage({
        type: "TOKEN",
        data: null
    },
    "*"),
    new Promise(s =>{
        const l = ({
            data: o
        }) =>{ ! o || typeof o != "object" || o.type !== "userInfo" || o.data.token && (r == null || r.close(), window.removeEventListener("message", l), s(o.data))
        };
        window.addEventListener("message", l)
    })
},
Or = ({
    serverURL: e,
    lang: t,
    paths: n,
    signal: i
}) =>Ci({
    serverURL: e,
    lang: t,
    paths: n,
    type: ["time"],
    signal: i
}),
zr = e =>Sn({...e,
    type: "time",
    action: "inc"
}),
jr = ({
    serverURL: e,
    lang: t,
    count: n,
    signal: i,
    token: r
}) =>{
    const s = {};
    return r && (s.Authorization = `Bearer $ {
        r
    }`),
    fetch(`${Ge(e)}comment?type=recent&count=${n}&lang=${t}`, {
        signal: i,
        headers: s
    }).then(l =>l.json())
},
Pr = ({
    serverURL: e,
    signal: t,
    pageSize: n,
    lang: i
}) =>fetch(`${Ge(e)}user?pageSize=${n}&lang=${i}`, {
    signal: t
}).then(r =>r.json()).then(r =>yt(r, "user list")).then(r =>r.data),
ko = ["nick", "mail", "link"],
Fr = e =>e.filter(t =>ko.includes(t)),
Ur = ["//unpkg.com/@waline/emojis@1.1.0/weibo"],
xo = ["//unpkg.com/@waline/emojis/tieba/tieba_agree.png", "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png", "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png", "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png", "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png", "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"],
_o = e =>new Promise((t, n) =>{
    if (e.size > 128 * 1e3) return n(new Error("File too large! File size limit 128KB"));
    const i = new FileReader;
    i.readAsDataURL(e),
    i.onload = () =>{
        var r;
        return t(((r = i.result) == null ? void 0 : r.toString()) || "")
    },
    i.onerror = n
}),
Co = e =>e === !0 ? '<p class="wl-tex">TeX is not available in preview</p>': '<span class="wl-tex">TeX is not available in preview</span>',
$o = e =>{
    const t = async(n, i = {}) =>fetch(`https://api.giphy.com/v1/gifs/${n}?${new URLSearchParams({lang:e,limit:"20",rating:"g",api_key:"6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",...i}).toString()}`).then(r=>r.json()).then(({data:r})=>r.map(s=>({title:s.title,src:s.images.downsized_medium.url})));return{search:n=>t("search",{q:n,offset:"0"}),default:()=>t("trending",{}),more:(n,i=0)=>t("search",{q:n,offset:i.toString()})}},Eo=/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,To=/</,Ro=/(?:^|\s)\/\/(.+?)$/gm,So=/\/\*([\S\s]*?)\*\//gm,Ao=new RegExp(`(${Eo.source}|${To.source})|((?:${Ro.source})|(?:${So.source}))`,"gmi"),Nr=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],$i={},Io=e=>{let t=0;return e.replace(Ao,(n,i,r)=>{if(r)return`<span style="color: slategray">${r}</span>`;if(i==="<")return"&lt;";let s;$i[i]?s=$i[i]:(s=Nr[t],$i[i]=s);const l=`<span style="color: #${s}">${i}</span>`;return t=++t%Nr.length,l})},Lo=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder","profile","approved","waiting","spam","unsticky","oldest","latest","hottest","reactionTitle"],st=e=>Object.fromEntries(e.map((t,n)=>[Lo[n],t]));var Hr=st(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
    Current word number: $2`, "Anonymous", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Search GIF", "Profile", "Approved", "Waiting", "Spam", "Unsticky", "Oldest", "Latest", "Hottest", "What do you think?"]),
    Dr = st(["Pseudo", "Le pseudo ne peut pas faire moins de 3 octets.", "E-mail", "Veuillez confirmer votre adresse e-mail.", "Site Web", "Optionnel", "Commentez ici...", "Aucun commentaire pour l'instant.", "Envoyer", "J'aime", "Annuler le j'aime", "Répondre", "Annuler la réponse", "Commentaires", "Actualiser", "Charger plus...", "Aperçu", "Emoji", "Télécharger une image", "Il y a quelques secondes", "Il y a quelques minutes", "Il y a quelques heures", "Il y a quelques jours", "À l'instant", "Téléchargement en cours", "Connexion", "Déconnexion", "Admin", "Épinglé", "Mots", `Veuillez saisir des commentaires entre $0 et $1 mots ! Nombre actuel de mots: $2`, "Anonyme", "Nains", "Hobbits", "Ents", "Mages", "Elfes", "Maïar", "GIF", "Rechercher un GIF", "Profil", "Approuvé", "En attente", "Indésirable", "Détacher", "Le plus ancien", "Dernier", "Le plus populaire", "Qu'en pensez-vous ?"]),
    Vr = st(["ニックネーム", "3バイト以上のニックネームをご入力ください.", "メールアドレス", "メールアドレスをご確認ください.", "サイト", "オプション", "ここにコメント", "コメントしましょう~", "提出する", "Like", "Cancel like", "返信する", "キャンセル", "コメント", "更新", "さらに読み込む", "プレビュー", "絵文字", "画像をアップロード", "秒前", "分前", "時間前", "日前", "たっだ今", "アップロード", "ログインする", "ログアウト", "管理者", "トップに置く", "ワード", `コメントは$0から$1ワードの間でなければなりません ! 現在の単語番号: $2`, "匿名", "うえにん", "なかにん", "しもおし", "特にしもおし", "かげ", "なぬし", "GIF", "探す GIF", "個人情報", "承認済み", "待っている", "スパム", "べたつかない", "逆順", "正順", "人気順", "どう思いますか？"]),
    Mo = st(["Apelido", "Apelido não pode ser menor que 3 bytes.", "E-Mail", "Por favor, confirme seu endereço de e-mail.", "Website", "Opcional", "Comente aqui...", "Nenhum comentário, ainda.", "Enviar", "Like", "Cancel like", "Responder", "Cancelar resposta", "Comentários", "Refrescar", "Carregar Mais...", "Visualizar", "Emoji", "Enviar Imagem", "segundos atrás", "minutos atrás", "horas atrás", "dias atrás", "agora mesmo", "Enviando", "Entrar", "Sair", "Admin", "Sticky", "Palavras", `Favor enviar comentário com $0 a $1 palavras ! Número de palavras atuais: $2`, "Anônimo", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Pesquisar GIF", "informação pessoal", "Aprovado", "Espera", "Spam", "Unsticky", "Mais velho", "Mais recentes", "Mais quente", "O que você acha?"]),
    Br = st(["Псевдоним", "Никнейм не может быть меньше 3 байт.", "Эл. адрес", "Пожалуйста, подтвердите адрес вашей электронной почты.", "Веб-сайт", "Необязательный", "Комментарий здесь...", "Пока нет комментариев.", "Отправить", "Like", "Cancel like", "Отвечать", "Отменить ответ", "Комментарии", "Обновить", "Загрузи больше...", "Превью", "эмодзи", "Загрузить изображение", "секунд назад", "несколько минут назад", "несколько часов назад", "дней назад", "прямо сейчас", "Загрузка", "Авторизоваться", "Выход из системы", "Админ", "Липкий", "Слова", `Пожалуйста, введитекомментарииот$0до$1слов ! Номертекущегослова: $2`, "Анонимный", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Поиск GIF", "Персональные данные", "Одобренный", "Ожидающий", "Спам", "Нелипкий", "самый старый", "последний", "самый горячий", "Что вы думаете?"]),
    Wr = st(["Tên", "Tên không được nhỏ hơn 3 ký tự.", "E-Mail", "Vui lòng xác nhập địa chỉ email của bạn.", "Website", "Tùy chọn", "Hãy bình luận có văn hoá!", "Chưa có bình luận", "Gửi", "Thích", "Bỏ thích", "Trả lời", "Hủy bỏ", "bình luận", "Làm mới", "Tải thêm...", "Xem trước", "Emoji", "Tải lên hình ảnh", "giây trước", "phút trước", "giờ trước", "ngày trước", "Vừa xong", "Đang tải lên", "Đăng nhập", "đăng xuất", "Quản trị viên", "Dính", "từ", `Bình luận phải cóđộdài giữa $0 và$1 từ ! Sốtừhiện tại: $2`, "Vô danh", "Người lùn", "Người tí hon", "Thần rừng", "Pháp sư", "Tiên tộc", "Maiar", "Ảnh GIF", "Tìm kiếm ảnh GIF", "thông tin cá nhân", "Đã được phê duyệt", "Đang chờ đợi", "Thư rác", "Không dính", "lâu đời nhất", "muộn nhất", "nóng nhất", "What do you think?"]),
    qr = st(["昵称", "昵称不能少于3个字符", "邮箱", "请填写正确的邮件地址", "网址", "可选", "欢迎评论", "来发评论吧~", "提交", "喜欢", "取消喜欢", "回复", "取消回复", "评论", "刷新", "加载更多...", "预览", "表情", "上传图片", "秒前", "分钟前", "小时前", "天前", "刚刚", "正在上传", "登录", "退出", "博主", "置顶", "字", `评论字数应在$0到$1字之间！当前字数：$2`, "匿名", "潜水", "冒泡", "吐槽", "活跃", "话痨", "传说", "表情包", "搜索表情包", "个人资料", "通过", "待审核", "垃圾", "取消置顶", "按倒序", "按正序", "按热度", "你认为这篇文章怎么样？"]),
    Oo = st(["暱稱", "暱稱不能少於3個字元", "郵箱", "請填寫正確的郵件地址", "網址", "可選", "歡迎留言", "來發留言吧~", "送出", "喜歡", "取消喜歡", "回覆", "取消回覆", "留言", "重整", "載入更多...", "預覽", "表情", "上傳圖片", "秒前", "分鐘前", "小時前", "天前", "剛剛", "正在上傳", "登入", "登出", "管理者", "置頂", "字", `留言字數應在$0到$1字之間！目前字數：$2`, "匿名", "潛水", "冒泡", "吐槽", "活躍", "多話", "傳說", "表情包", "搜尋表情包", "個人資料", "通過", "待審核", "垃圾", "取消置頂", "最早", "最新", "熱門", "你認為這篇文章怎麼樣？"]);
    const Kr = "en-US",
    An = {
        zh: qr,
        "zh-cn": qr,
        "zh-tw": Oo,
        en: Hr,
        "en-us": Hr,
        fr: Dr,
        "fr-fr": Dr,
        jp: Vr,
        "jp-jp": Vr,
        "pt-br": Mo,
        ru: Br,
        "ru-ru": Br,
        vi: Wr,
        "vi-vn": Wr
    },
    Zr = e =>An[e.toLowerCase()] || An[Kr],
    zo = e =>Object.keys(An).includes(e.toLowerCase()) ? e: Kr,
    Gr = e =>{
        try {
            e = decodeURI(e)
        } catch {}
        return e
    },
    Qr = (e = "") =>e.replace(/\/$/u, ""),
    Jr = e =>/^(https?:)?\/\//.test(e),
    In = e =>{
        const t = Qr(e);
        return Jr(t) ? t: `https: //${t}`},jo=e=>Array.isArray(e)?e:e?[0,e]:!1,Ei=(e,t)=>typeof e=="function"?e:e===!1?!1:t,Po=({serverURL:e,path:t=location.pathname,lang:n=typeof navigator>"u"?"en-US":navigator.language,locale:i,emoji:r=Ur,meta:s=["nick","mail","link"],requiredMeta:l=[],dark:o=!1,pageSize:a=10,wordLimit:c,imageUploader:f,highlighter:p,texRenderer:d,copyright:m=!0,login:S="enable",search:x,reaction:C,recaptchaV3Key:w="",turnstileKey:T="",commentSorting:j="latest",...N})=>({serverURL:In(e),path:Gr(t),lang:zo(n),locale:{...Zr(n),...typeof i=="object"?i:{}},wordLimit:jo(c),meta:Fr(s),requiredMeta:Fr(l),imageUploader:Ei(f,_o),highlighter:Ei(p,Io),texRenderer:Ei(d,Co),dark:o,emoji:typeof r=="boolean"?r?Ur:[]:r,pageSize:a,login:S,copyright:m,search:x===!1?!1:typeof x=="object"?x:$o(n),recaptchaV3Key:w,turnstileKey:T,reaction:Array.isArray(C)?C:C===!0?xo:[],commentSorting:j,...N}),It=e=>typeof e=="string",Ti="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}",Fo=e=>It(e)?e==="auto"?`@media(prefers-color-scheme:dark){body${Ti}}`:`${e}${Ti}`:e===!0?`:root${Ti}`:"",Ri=(e,t)=>{let n=e.toString();for(;n.length<t;)n="0"+n;return n},Uo=e=>{const t=Ri(e.getDate(),2),n=Ri(e.getMonth()+1,2);return`${Ri(e.getFullYear(),2)}-${n}-${t}`},No=(e,t,n)=>{if(!e)return"";const i=It(e)?new Date(e.indexOf(" ")!==-1?e.replace(/-/g,"/"):e):e,r=t.getTime()-i.getTime(),s=Math.floor(r/(24*3600*1e3));if(s===0){const l=r%864e5,o=Math.floor(l/(3600*1e3));if(o===0){const a=l%36e5,c=Math.floor(a/(60*1e3));if(c===0){const f=a%6e4;return`${Math.round(f/1e3)} ${n.seconds}`}return`${c} ${n.minutes}`}return`${o} ${n.hours}`}return s<0?n.now:s<8?`${s} ${n.days}`:Uo(i)},Ho=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Do=e=>Ho.test(e);
        function Si(e,t){const n=new Set(e.split(","));return t?i=>n.has(i.toLowerCase()):i=>n.has(i)}const ce={},Lt=[],Qe=()=>{},Vo=()=>!1,Ln=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ai=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Bo=Object.prototype.hasOwnProperty,J=(e,t)=>Bo.call(e,t),V=Array.isArray,Mt=e=>Gt(e)==="[object Map]",Ot=e=>Gt(e)==="[object Set]",Xr=e=>Gt(e)==="[object Date]",te=e=>typeof e=="function",we=e=>typeof e=="string",lt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",es=e=>(fe(e)||te(e))&&te(e.then)&&te(e.catch),ts=Object.prototype.toString,Gt=e=>ts.call(e),Wo=e=>Gt(e).slice(8,-1),ns=e=>Gt(e)==="[object Object]",Ii=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=Si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qo=/-(\w)/g,
        Ve = Mn(e =>e.replace(qo, (t, n) =>n ? n.toUpperCase() : "")),
        Ko = /\B([A-Z])/g,
        zt = Mn(e =>e.replace(Ko, "-$1").toLowerCase()),
        On = Mn(e =>e.charAt(0).toUpperCase() + e.slice(1)),
        Li = Mn(e =>e ? `on$ {
            On(e)
        }`: ""),
        ot = (e, t) =>!Object.is(e, t),
        zn = (e, t) =>{
            for (let n = 0; n < e.length; n++) e[n](t)
        },
        jn = (e, t, n) =>{
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n
            })
        },
        Jt = e =>{
            const t = parseFloat(e);
            return isNaN(t) ? e: t
        };
        let is;
        const Mi = () =>is || (is = typeof globalThis < "u" ? globalThis: typeof self < "u" ? self: typeof window < "u" ? window: typeof global < "u" ? global: {});
        function Yt(e) {
            if (V(e)) {
                const t = {};
                for (let n = 0; n < e.length; n++) {
                    const i = e[n],
                    r = we(i) ? Jo(i) : Yt(i);
                    if (r) for (const s in r) t[s] = r[s]
                }
                return t
            } else if (we(e) || fe(e)) return e
        }
        const Zo = /;(?![^(]*\))/g,
        Go = /:([^]+)/,
        Qo = /\/\*[^]*?\*\//g;
        function Jo(e) {
            const t = {};
            return e.replace(Qo, "").split(Zo).forEach(n =>{
                if (n) {
                    const i = n.split(Go);
                    i.length > 1 && (t[i[0].trim()] = i[1].trim())
                }
            }),
            t
        }
        function pe(e) {
            let t = "";
            if (we(e)) t = e;
            else if (V(e)) for (let n = 0; n < e.length; n++) {
                const i = pe(e[n]);
                i && (t += i + " ")
            } else if (fe(e)) for (const n in e) e[n] && (t += n + " ");
            return t.trim()
        }
        const Yo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        Xo = Si(Yo);
        function rs(e) {
            return !! e || e === ""
        }
        function ea(e, t) {
            if (e.length !== t.length) return ! 1;
            let n = !0;
            for (let i = 0; n && i < e.length; i++) n = wt(e[i], t[i]);
            return n
        }
        function wt(e, t) {
            if (e === t) return ! 0;
            let n = Xr(e),
            i = Xr(t);
            if (n || i) return n && i ? e.getTime() === t.getTime() : !1;
            if (n = lt(e), i = lt(t), n || i) return e === t;
            if (n = V(e), i = V(t), n || i) return n && i ? ea(e, t) : !1;
            if (n = fe(e), i = fe(t), n || i) {
                if (!n || !i) return ! 1;
                const r = Object.keys(e).length,
                s = Object.keys(t).length;
                if (r !== s) return ! 1;
                for (const l in e) {
                    const o = e.hasOwnProperty(l),
                    a = t.hasOwnProperty(l);
                    if (o && !a || !o && a || !wt(e[l], t[l])) return ! 1
                }
            }
            return String(e) === String(t)
        }
        function Oi(e, t) {
            return e.findIndex(n =>wt(n, t))
        }
        const ne = e =>we(e) ? e: e == null ? "": V(e) || fe(e) && (e.toString === ts || !te(e.toString)) ? JSON.stringify(e, ss, 2) : String(e),
        ss = (e, t) =>t && t.__v_isRef ? ss(e, t.value) : Mt(t) ? { [`Map(${t.size})`] : [...t.entries()].reduce((n, [i, r], s) =>(n[zi(i, s) + " =>"] = r, n), {})
        }: Ot(t) ? { [`Set(${t.size})`] : [...t.values()].map(n =>zi(n))
        }: lt(t) ? zi(t) : fe(t) && !V(t) && !ns(t) ? String(t) : t,
        zi = (e, t = "") =>{
            var n;
            return lt(e) ? `Symbol($ { (n = e.description) != null ? n: t
            })`: e
        };
        /**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
        let Le;
        class ta {
            constructor(t = !1) {
                this.detached = t,
                this._active = !0,
                this.effects = [],
                this.cleanups = [],
                this.parent = Le,
                !t && Le && (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1)
            }
            get active() {
                return this._active
            }
            run(t) {
                if (this._active) {
                    const n = Le;
                    try {
                        return Le = this,
                        t()
                    } finally {
                        Le = n
                    }
                }
            }
            on() {
                Le = this
            }
            off() {
                Le = this.parent
            }
            stop(t) {
                if (this._active) {
                    let n,
                    i;
                    for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
                    for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
                    if (this.scopes) for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
                    if (!this.detached && this.parent && !t) {
                        const r = this.parent.scopes.pop();
                        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
                    }
                    this.parent = void 0,
                    this._active = !1
                }
            }
        }
        function na(e, t = Le) {
            t && t.active && t.effects.push(e)
        }
        function ls() {
            return Le
        }
        function ia(e) {
            Le && Le.cleanups.push(e)
        }
        let bt;
        class ji {
            constructor(t, n, i, r) {
                this.fn = t,
                this.trigger = n,
                this.scheduler = i,
                this.active = !0,
                this.deps = [],
                this._dirtyLevel = 4,
                this._trackId = 0,
                this._runnings = 0,
                this._shouldSchedule = !1,
                this._depsLength = 0,
                na(this, r)
            }
            get dirty() {
                return (this._dirtyLevel === 2 || this._dirtyLevel === 3) && (this._dirtyLevel = 1, jt(), this._dirtyLevel === 1 && (this._dirtyLevel = 0), Pt()),
                this._dirtyLevel >= 4
            }
            set dirty(t) {
                this._dirtyLevel = t ? 4 : 0
            }
            run() {
                if (this._dirtyLevel = 0, !this.active) return this.fn();
                let t = at,
                n = bt;
                try {
                    return at = !0,
                    bt = this,
                    this._runnings++,
                    os(this),
                    this.fn()
                } finally {
                    as(this),
                    this._runnings--,
                    bt = n,
                    at = t
                }
            }
            stop() {
                var t;
                this.active && (os(this), as(this), (t = this.onStop) == null || t.call(this), this.active = !1)
            }
        }
        function os(e) {
            e._trackId++,
            e._depsLength = 0
        }
        function as(e) {
            if (e.deps.length > e._depsLength) {
                for (let t = e._depsLength; t < e.deps.length; t++) cs(e.deps[t], e);
                e.deps.length = e._depsLength
            }
        }
        function cs(e, t) {
            const n = e.get(t);
            n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
        }
        let at = !0,
        Pi = 0;
        const us = [];
        function jt() {
            us.push(at),
            at = !1
        }
        function Pt() {
            const e = us.pop();
            at = e === void 0 ? !0 : e
        }
        function Fi() {
            Pi++
        }
        function Ui() {
            for (Pi--; ! Pi && Ni.length;) Ni.shift()()
        }
        function fs(e, t, n) {
            if (t.get(e) !== e._trackId) {
                t.set(e, e._trackId);
                const i = e.deps[e._depsLength];
                i !== t ? (i && cs(i, e), e.deps[e._depsLength++] = t) : e._depsLength++
            }
        }
        const Ni = [];
        function hs(e, t, n) {
            Fi();
            for (const i of e.keys()) {
                let r;
                i._dirtyLevel < t && (r ??(r = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t),
                i._shouldSchedule && (r ??(r = e.get(i) === i._trackId)) && (i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && Ni.push(i.scheduler)))
            }
            Ui()
        }
        const ds = (e, t) =>{
            const n = new Map;
            return n.cleanup = e,
            n.computed = t,
            n
        },
        Hi = new WeakMap,
        kt = Symbol(""),
        Di = Symbol("");
        function Se(e, t, n) {
            if (at && bt) {
                let i = Hi.get(e);
                i || Hi.set(e, i = new Map);
                let r = i.get(n);
                r || i.set(n, r = ds(() =>i.delete(n))),
                fs(bt, r)
            }
        }
        function Je(e, t, n, i, r, s) {
            const l = Hi.get(e);
            if (!l) return;
            let o = [];
            if (t === "clear") o = [...l.values()];
            else if (n === "length" && V(e)) {
                const a = Number(i);
                l.forEach((c, f) =>{ (f === "length" || !lt(f) && f >= a) && o.push(c)
                })
            } else switch (n !== void 0 && o.push(l.get(n)), t) {
            case "add":
                V(e) ? Ii(n) && o.push(l.get("length")) : (o.push(l.get(kt)), Mt(e) && o.push(l.get(Di)));
                break;
            case "delete":
                V(e) || (o.push(l.get(kt)), Mt(e) && o.push(l.get(Di)));
                break;
            case "set":
                Mt(e) && o.push(l.get(kt));
                break
            }
            Fi();
            for (const a of o) a && hs(a, 4);
            Ui()
        }
        const ra = Si("__proto__,__v_isRef,__isVue"),
        ps = new Set(Object.getOwnPropertyNames(Symbol).filter(e =>e !== "arguments" && e !== "caller").map(e =>Symbol[e]).filter(lt)),
        gs = sa();
        function sa() {
            const e = {};
            return ["includes", "indexOf", "lastIndexOf"].forEach(t =>{
                e[t] = function(...n) {
                    const i = X(this);
                    for (let s = 0, l = this.length; s < l; s++) Se(i, "get", s + "");
                    const r = i[t](...n);
                    return r === -1 || r === !1 ? i[t](...n.map(X)) : r
                }
            }),
            ["push", "pop", "shift", "unshift", "splice"].forEach(t =>{
                e[t] = function(...n) {
                    jt(),
                    Fi();
                    const i = X(this)[t].apply(this, n);
                    return Ui(),
                    Pt(),
                    i
                }
            }),
            e
        }
        function la(e) {
            const t = X(this);
            return Se(t, "has", e),
            t.hasOwnProperty(e)
        }
        class ms {
            constructor(t = !1, n = !1) {
                this._isReadonly = t,
                this._shallow = n
            }
            get(t, n, i) {
                const r = this._isReadonly,
                s = this._shallow;
                if (n === "__v_isReactive") return ! r;
                if (n === "__v_isReadonly") return r;
                if (n === "__v_isShallow") return s;
                if (n === "__v_raw") return i === (r ? s ? wa: Cs: s ? _s: xs).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t: void 0;
                const l = V(t);
                if (!r) {
                    if (l && J(gs, n)) return Reflect.get(gs, n, i);
                    if (n === "hasOwnProperty") return la
                }
                const o = Reflect.get(t, n, i);
                return (lt(n) ? ps.has(n) : ra(n)) || (r || Se(t, "get", n), s) ? o: $e(o) ? l && Ii(n) ? o: o.value: fe(o) ? r ? en(o) : Xt(o) : o
            }
        }
        class vs extends ms {
            constructor(t = !1) {
                super(!1, t)
            }
            set(t, n, i, r) {
                let s = t[n];
                if (!this._shallow) {
                    const a = Ut(s);
                    if (!Vn(i) && !Ut(i) && (s = X(s), i = X(i)), !V(t) && $e(s) && !$e(i)) return a ? !1 : (s.value = i, !0)
                }
                const l = V(t) && Ii(n) ? Number(n) < t.length: J(t, n),
                o = Reflect.set(t, n, i, r);
                return t === X(r) && (l ? ot(i, s) && Je(t, "set", n, i) : Je(t, "add", n, i)),
                o
            }
            deleteProperty(t, n) {
                const i = J(t, n),
                r = Reflect.deleteProperty(t, n);
                return r && i && Je(t, "delete", n, void 0),
                r
            }
            has(t, n) {
                const i = Reflect.has(t, n);
                return (!lt(n) || !ps.has(n)) && Se(t, "has", n),
                i
            }
            ownKeys(t) {
                return Se(t, "iterate", V(t) ? "length": kt),
                Reflect.ownKeys(t)
            }
        }
        class oa extends ms {
            constructor(t = !1) {
                super(!0, t)
            }
            set(t, n) {
                return ! 0
            }
            deleteProperty(t, n) {
                return ! 0
            }
        }
        const aa = new vs,
        ca = new oa,
        ua = new vs(!0),
        Vi = e =>e,
        Pn = e =>Reflect.getPrototypeOf(e);
        function Fn(e, t, n = !1, i = !1) {
            e = e.__v_raw;
            const r = X(e),
            s = X(t);
            n || (ot(t, s) && Se(r, "get", t), Se(r, "get", s));
            const {
                has: l
            } = Pn(r),
            o = i ? Vi: n ? qi: tn;
            if (l.call(r, t)) return o(e.get(t));
            if (l.call(r, s)) return o(e.get(s));
            e !== r && e.get(t)
        }
        function Un(e, t = !1) {
            const n = this.__v_raw,
            i = X(n),
            r = X(e);
            return t || (ot(e, r) && Se(i, "has", e), Se(i, "has", r)),
            e === r ? n.has(e) : n.has(e) || n.has(r)
        }
        function Nn(e, t = !1) {
            return e = e.__v_raw,
            !t && Se(X(e), "iterate", kt),
            Reflect.get(e, "size", e)
        }
        function ys(e) {
            e = X(e);
            const t = X(this);
            return Pn(t).has.call(t, e) || (t.add(e), Je(t, "add", e, e)),
            this
        }
        function ws(e, t) {
            t = X(t);
            const n = X(this),
            {
                has: i,
                get: r
            } = Pn(n);
            let s = i.call(n, e);
            s || (e = X(e), s = i.call(n, e));
            const l = r.call(n, e);
            return n.set(e, t),
            s ? ot(t, l) && Je(n, "set", e, t) : Je(n, "add", e, t),
            this
        }
        function bs(e) {
            const t = X(this),
            {
                has: n,
                get: i
            } = Pn(t);
            let r = n.call(t, e);
            r || (e = X(e), r = n.call(t, e)),
            i && i.call(t, e);
            const s = t.delete(e);
            return r && Je(t, "delete", e, void 0),
            s
        }
        function ks() {
            const e = X(this),
            t = e.size !== 0,
            n = e.clear();
            return t && Je(e, "clear", void 0, void 0),
            n
        }
        function Hn(e, t) {
            return function(i, r) {
                const s = this,
                l = s.__v_raw,
                o = X(l),
                a = t ? Vi: e ? qi: tn;
                return ! e && Se(o, "iterate", kt),
                l.forEach((c, f) =>i.call(r, a(c), a(f), s))
            }
        }
        function Dn(e, t, n) {
            return function(...i) {
                const r = this.__v_raw,
                s = X(r),
                l = Mt(s),
                o = e === "entries" || e === Symbol.iterator && l,
                a = e === "keys" && l,
                c = r[e](...i),
                f = n ? Vi: t ? qi: tn;
                return ! t && Se(s, "iterate", a ? Di: kt),
                {
                    next() {
                        const {
                            value: p,
                            done: d
                        } = c.next();
                        return d ? {
                            value: p,
                            done: d
                        }: {
                            value: o ? [f(p[0]), f(p[1])] : f(p),
                            done: d
                        }
                    },
                    [Symbol.iterator]() {
                        return this
                    }
                }
            }
        }
        function ct(e) {
            return function(...t) {
                return e === "delete" ? !1 : e === "clear" ? void 0 : this
            }
        }
        function fa() {
            const e = {
                get(s) {
                    return Fn(this, s)
                },
                get size() {
                    return Nn(this)
                },
                has: Un,
                add: ys,
                set: ws,
                delete: bs,
                clear: ks,
                forEach: Hn(!1, !1)
            },
            t = {
                get(s) {
                    return Fn(this, s, !1, !0)
                },
                get size() {
                    return Nn(this)
                },
                has: Un,
                add: ys,
                set: ws,
                delete: bs,
                clear: ks,
                forEach: Hn(!1, !0)
            },
            n = {
                get(s) {
                    return Fn(this, s, !0)
                },
                get size() {
                    return Nn(this, !0)
                },
                has(s) {
                    return Un.call(this, s, !0)
                },
                add: ct("add"),
                set: ct("set"),
                delete: ct("delete"),
                clear: ct("clear"),
                forEach: Hn(!0, !1)
            },
            i = {
                get(s) {
                    return Fn(this, s, !0, !0)
                },
                get size() {
                    return Nn(this, !0)
                },
                has(s) {
                    return Un.call(this, s, !0)
                },
                add: ct("add"),
                set: ct("set"),
                delete: ct("delete"),
                clear: ct("clear"),
                forEach: Hn(!0, !0)
            };
            return ["keys", "values", "entries", Symbol.iterator].forEach(s =>{
                e[s] = Dn(s, !1, !1),
                n[s] = Dn(s, !0, !1),
                t[s] = Dn(s, !1, !0),
                i[s] = Dn(s, !0, !0)
            }),
            [e, n, t, i]
        }
        const[ha, da, pa, ga] = fa();
        function Bi(e, t) {
            const n = t ? e ? ga: pa: e ? da: ha;
            return (i, r, s) =>r === "__v_isReactive" ? !e: r === "__v_isReadonly" ? e: r === "__v_raw" ? i: Reflect.get(J(n, r) && r in i ? n: i, r, s)
        }
        const ma = {
            get: Bi(!1, !1)
        },
        va = {
            get: Bi(!1, !0)
        },
        ya = {
            get: Bi(!0, !1)
        },
        xs = new WeakMap,
        _s = new WeakMap,
        Cs = new WeakMap,
        wa = new WeakMap;
        function ba(e) {
            switch (e) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
            }
        }
        function ka(e) {
            return e.__v_skip || !Object.isExtensible(e) ? 0 : ba(Wo(e))
        }
        function Xt(e) {
            return Ut(e) ? e: Wi(e, !1, aa, ma, xs)
        }
        function xa(e) {
            return Wi(e, !1, ua, va, _s)
        }
        function en(e) {
            return Wi(e, !0, ca, ya, Cs)
        }
        function Wi(e, t, n, i, r) {
            if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
            const s = r.get(e);
            if (s) return s;
            const l = ka(e);
            if (l === 0) return e;
            const o = new Proxy(e, l === 2 ? i: n);
            return r.set(e, o),
            o
        }
        function Ft(e) {
            return Ut(e) ? Ft(e.__v_raw) : !!(e && e.__v_isReactive)
        }
        function Ut(e) {
            return !! (e && e.__v_isReadonly)
        }
        function Vn(e) {
            return !! (e && e.__v_isShallow)
        }
        function $s(e) {
            return Ft(e) || Ut(e)
        }
        function X(e) {
            const t = e && e.__v_raw;
            return t ? X(t) : e
        }
        function Es(e) {
            return Object.isExtensible(e) && jn(e, "__v_skip", !0),
            e
        }
        const tn = e =>fe(e) ? Xt(e) : e,
        qi = e =>fe(e) ? en(e) : e;
        class Ts {
            constructor(t, n, i, r) {
                this._setter = n,
                this.dep = void 0,
                this.__v_isRef = !0,
                this.__v_isReadonly = !1,
                this.effect = new ji(() =>t(this._value), () =>Bn(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
                this.effect.computed = this,
                this.effect.active = this._cacheable = !r,
                this.__v_isReadonly = i
            }
            get value() {
                const t = X(this);
                return (!t._cacheable || t.effect.dirty) && ot(t._value, t._value = t.effect.run()) && Bn(t, 4),
                Rs(t),
                t.effect._dirtyLevel >= 2 && Bn(t, 2),
                t._value
            }
            set value(t) {
                this._setter(t)
            }
            get _dirty() {
                return this.effect.dirty
            }
            set _dirty(t) {
                this.effect.dirty = t
            }
        }
        function _a(e, t, n = !1) {
            let i,
            r;
            const s = te(e);
            return s ? (i = e, r = Qe) : (i = e.get, r = e.set),
            new Ts(i, r, s || !r, n)
        }
        function Rs(e) {
            var t;
            at && bt && (e = X(e), fs(bt, (t = e.dep) != null ? t: e.dep = ds(() =>e.dep = void 0, e instanceof Ts ? e: void 0)))
        }
        function Bn(e, t = 4, n) {
            e = X(e);
            const i = e.dep;
            i && hs(i, t)
        }
        function $e(e) {
            return !! (e && e.__v_isRef === !0)
        }
        function K(e) {
            return Ss(e, !1)
        }
        function Ca(e) {
            return Ss(e, !0)
        }
        function Ss(e, t) {
            return $e(e) ? e: new $a(e, t)
        }
        class $a {
            constructor(t, n) {
                this.__v_isShallow = n,
                this.dep = void 0,
                this.__v_isRef = !0,
                this._rawValue = n ? t: X(t),
                this._value = n ? t: tn(t)
            }
            get value() {
                return Rs(this),
                this._value
            }
            set value(t) {
                const n = this.__v_isShallow || Vn(t) || Ut(t);
                t = n ? t: X(t),
                ot(t, this._rawValue) && (this._rawValue = t, this._value = n ? t: tn(t), Bn(this, 4))
            }
        }
        function G(e) {
            return $e(e) ? e.value: e
        }
        const Ea = {
            get: (e, t, n) =>G(Reflect.get(e, t, n)),
            set: (e, t, n, i) =>{
                const r = e[t];
                return $e(r) && !$e(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i)
            }
        };
        function As(e) {
            return Ft(e) ? e: new Proxy(e, Ea)
        }
        /**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
        function ut(e, t, n, i) {
            try {
                return i ? e(...i) : e()
            } catch(r) {
                Wn(r, t, n)
            }
        }
        function Be(e, t, n, i) {
            if (te(e)) {
                const s = ut(e, t, n, i);
                return s && es(s) && s.
                catch(l =>{
                    Wn(l, t, n)
                }),
                s
            }
            const r = [];
            for (let s = 0; s < e.length; s++) r.push(Be(e[s], t, n, i));
            return r
        }
        function Wn(e, t, n, i = !0) {
            const r = t ? t.vnode: null;
            if (t) {
                let s = t.parent;
                const l = t.proxy,
                o = `https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,l,o)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){ut(a,null,10,[e,l,o]);return}}Ta(e,n,r,i)}function Ta(e,t,n,i=!0){console.error(e)}let nn=!1,Ki=!1;const xe=[];let We=0;const Nt=[];let ft=null,xt=0;const Is=Promise.resolve();let Zi=null;function rn(e){const t=Zi||Is;return e?t.then(this?e.bind(this):e):t}function Ra(e){let t=We+1,n=xe.length;for(;t<n;){const i=t+n>>>1,r=xe[i],s=sn(r);s<e||s===e&&r.pre?t=i+1:n=i}return t}function Gi(e){(!xe.length||!xe.includes(e,nn&&e.allowRecurse?We+1:We))&&(e.id==null?xe.push(e):xe.splice(Ra(e.id),0,e),Ls())}function Ls(){!nn&&!Ki&&(Ki=!0,Zi=Is.then(zs))}function Sa(e){const t=xe.indexOf(e);t>We&&xe.splice(t,1)}function Aa(e){V(e)?Nt.push(...e):(!ft||!ft.includes(e,e.allowRecurse?xt+1:xt))&&Nt.push(e),Ls()}function Ms(e,t,n=nn?We+1:0){for(;n<xe.length;n++){const i=xe[n];if(i&&i.pre){if(e&&i.id!==e.uid)continue;xe.splice(n,1),n--,i()}}}function Os(e){if(Nt.length){const t=[...new Set(Nt)].sort((n,i)=>sn(n)-sn(i));if(Nt.length=0,ft){ft.push(...t);return}for(ft=t,xt=0;xt<ft.length;xt++)ft[xt]();ft=null,xt=0}}const sn=e=>e.id==null?1/0:e.id,Ia=(e,t)=>{const n=sn(e)-sn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function zs(e){Ki=!1,nn=!0,xe.sort(Ia);try{for(We=0;We<xe.length;We++){const t=xe[We];t&&t.active!==!1&&ut(t,null,14)}}finally{We=0,xe.length=0,Os(),nn=!1,Zi=null,(xe.length||Nt.length)&&zs()}}function La(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ce;let r=n;const s=t.startsWith("update:"),l=s&&t.slice(7);if(l&&l in i){const f=`${l==="modelValue"?"model":l}Modifiers`,{number:p,trim:d}=i[f]||ce;d&&(r=n.map(m=>we(m)?m.trim():m)),p&&(r=n.map(Jt))}let o,a=i[o=Li(t)]||i[o=Li(Ve(t))];!a&&s&&(a=i[o=Li(zt(t))]),a&&Be(a,e,6,r);const c=i[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Be(c,e,6,r)}}function Ma(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let l={};return!s&&!!1?(fe(e)&&i.set(e,null),null):(V(s)?s.forEach(a=>l[a]=null):Ce(l,s),fe(e)&&i.set(e,l),l)}function qn(e,t){return!e||!Ln(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,zt(t))||J(e,t))}let Ee=null,js=null;function Kn(e){const t=Ee;return Ee=e,js=e&&e.type.__scopeId||null,t}function Oa(e,t=Ee,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&il(-1);const s=Kn(t);let l;try{l=e(...r)}finally{Kn(s),i._d&&il(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Qi(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[l],slots:o,attrs:a,emit:c,render:f,renderCache:p,data:d,setupState:m,ctx:S,inheritAttrs:x}=e;let C,w;const T=Kn(e);try{if(n.shapeFlag&4){const N=r||i,P=N;C=qe(f.call(P,N,p,s,m,d,S)),w=a}else{const N=t;C=qe(N.length>1?N(s,{attrs:a,slots:o,emit:c}):N(s,null)),w=t.props?a:za(a)}}catch(N){fn.length=0,Wn(N,e,1),C=se(Et)}let j=C;if(w&&x!==!1){const N=Object.keys(w),{shapeFlag:P}=j;N.length&&P&7&&(l&&N.some(Ai)&&(w=ja(w,l)),j=Ht(j,w))}return n.dirs&&(j=Ht(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),C=j,Kn(T),C}const za=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ln(n))&&((t||(t={}))[n]=e[n]);return t},ja=(e,t)=>{const n={};for(const i in e)(!Ai(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Pa(e,t,n){const{props:i,children:r,component:s}=e,{props:l,children:o,patchFlag:a}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Ps(i,l,c):!!l;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const d=f[p];if(l[d]!==i[d]&&!qn(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===l?!1:i?l?Ps(i,l,c):!0:!!l;return!1}function Ps(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!qn(n,s))return!0}return!1}function Fa({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Fs="components";function Ua(e,t){return Ha(Fs,e,!0,t)||e}const Na=Symbol.for("v-ndc");function Ha(e,t,n=!0,i=!1){const r=Ee||Re;if(r){const s=r.type;if(e===Fs){const o=Tc(s,!1);if(o&&(o===t||o===Ve(t)||o===On(Ve(t))))return s}const l=Us(r[e]||s[e],t)||Us(r.appContext[e],t);return!l&&i?s:l}}function Us(e,t){return e&&(e[t]||e[Ve(t)]||e[On(Ve(t))])}const Da=e=>e.__isSuspense;function Va(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Aa(e)}const Ba=Symbol.for("v-scx"),Wa=()=>Xn(Ba);function Ns(e,t){return Hs(e,null,t)}const Zn={};function Pe(e,t,n){return Hs(e,t,n)}function Hs(e,t,{immediate:n,deep:i,flush:r,once:s,onTrack:l,onTrigger:o}=ce){if(t&&s){const z=t;t=(...W)=>{z(...W),P()}}const a=Re,c=z=>i===!0?z:_t(z,i===!1?1:void 0);let f,p=!1,d=!1;if($e(e)?(f=()=>e.value,p=Vn(e)):Ft(e)?(f=()=>c(e),p=!0):V(e)?(d=!0,p=e.some(z=>Ft(z)||Vn(z)),f=()=>e.map(z=>{if($e(z))return z.value;if(Ft(z))return c(z);if(te(z))return ut(z,a,2)})):te(e)?t?f=()=>ut(e,a,2):f=()=>(m&&m(),Be(e,a,3,[S])):f=Qe,t&&i){const z=f;f=()=>_t(z())}let m,S=z=>{m=j.onStop=()=>{ut(z,a,4),m=j.onStop=void 0}},x;if(ri)if(S=Qe,t?n&&Be(t,a,3,[f(),d?[]:void 0,S]):f(),r==="sync"){const z=Wa();x=z.__watcherHandles||(z.__watcherHandles=[])}else return Qe;let C=d?new Array(e.length).fill(Zn):Zn;const w=()=>{if(!(!j.active||!j.dirty))if(t){const z=j.run();(i||p||(d?z.some((W,B)=>ot(W,C[B])):ot(z,C)))&&(m&&m(),Be(t,a,3,[z,C===Zn?void 0:d&&C[0]===Zn?[]:C,S]),C=z)}else j.run()};w.allowRecurse=!!t;let T;r==="sync"?T=w:r==="post"?T=()=>Ae(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),T=()=>Gi(w));const j=new ji(f,Qe,T),N=ls(),P=()=>{j.stop(),N&&Yr(N.effects,j)};return t?n?w():C=j.run():r==="post"?Ae(j.run.bind(j),a&&a.suspense):j.run(),x&&x.push(P),P}function _t(e,t,n=0,i){if(!fe(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(i=i||new Set,i.has(e))return e;if(i.add(e),$e(e))_t(e.value,t,n,i);else if(V(e))for(let r=0;r<e.length;r++)_t(e[r],t,n,i);else if(Ot(e)||Mt(e))e.forEach(r=>{_t(r,t,n,i)});else if(ns(e))for(const r in e)_t(e[r],t,n,i);return e}function Gn(e,t){if(Ee===null)return e;const n=si(Ee)||Ee.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,l,o,a=ce]=t[r];s&&(te(s)&&(s={mounted:s,updated:s}),s.deep&&_t(l),i.push({dir:s,instance:n,value:l,oldValue:void 0,arg:o,modifiers:a}))}return e}function Ct(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let l=0;l<r.length;l++){const o=r[l];s&&(o.oldValue=s[l].value);let a=o.dir[i];a&&(jt(),Be(a,n,8,[e.el,o,e,t]),Pt())}}/*! #__NO_SIDE_EFFECTS__ */function ln(e,t){return te(e)?Ce({name:e.name},t,{setup:e}):e}const Qn=e=>!!e.type.__asyncLoader,qa=e=>e.type.__isKeepAlive;function Ka(e,t,n=Re,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;jt();const o=ar(n),a=Be(t,n,e,l);return o(),Pt(),a});return i?r.unshift(s):r.push(s),s}}const Ji=e=>(t,n=Re)=>(!ri||e==="sp")&&Ka(e,(...i)=>t(...i),n),on=Ji("m"),Za=Ji("bum"),Jn=Ji("um");function Fe(e,t,n,i){let r;const s=n&&n[i];if(V(e)||we(e)){r=new Array(e.length);for(let l=0,o=e.length;l<o;l++)r[l]=t(e[l],l,void 0,s&&s[l])}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,s&&s[l])}else if(fe(e))if(e[Symbol.iterator])r=Array.from(e,(l,o)=>t(l,o,void 0,s&&s[o]));else{const l=Object.keys(e);r=new Array(l.length);for(let o=0,a=l.length;o<a;o++){const c=l[o];r[o]=t(e[c],c,o,s&&s[o])}}else r=[];return n&&(n[i]=r),r}const Yi=e=>e?ol(e)?si(e)||e.proxy:Yi(e.parent):null,an=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$emit:e=>e.emit,$options:e=>e.type,$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Gi(e.update)}),$nextTick:e=>e.n||(e.n=rn.bind(e.proxy)),$watch:e=>Qe}),Xi=(e,t)=>e!==ce&&!e.__isScriptSetup&&J(e,t),Ga={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:l,type:o,appContext:a}=e;let c;if(t[0]!=="$"){const m=l[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Xi(i,t))return l[t]=1,i[t];if(r!==ce&&J(r,t))return l[t]=2,r[t];if((c=e.propsOptions[0])&&J(c,t))return l[t]=3,s[t];if(n!==ce&&J(n,t))return l[t]=4,n[t];l[t]=0}}const f=an[t];let p,d;if(f)return t==="$attrs"&&Se(e,"get",t),f(e);if((p=o.__cssModules)&&(p=p[t]))return p;if(n!==ce&&J(n,t))return l[t]=4,n[t];if(d=a.config.globalProperties,J(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return Xi(r,t)?(r[t]=n,!0):i!==ce&&J(i,t)?(i[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},l){let o;return!!n[l]||e!==ce&&J(e,l)||Xi(t,l)||(o=s[0])&&J(o,l)||J(i,l)||J(an,l)||J(r.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ds(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Qa(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,o=s.get(t);let a;return o?a=o:!r.length&&!n&&!i?a=t:(a={},r.length&&r.forEach(c=>Yn(a,c,l,!0)),Yn(a,t,l)),fe(t)&&s.set(t,a),a}function Yn(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Yn(e,s,n,!0),r&&r.forEach(l=>Yn(e,l,n,!0));for(const l in t)if(!(i&&l==="expose")){const o=Ja[l]||n&&n[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const Ja={data:Vs,props:Ws,emits:Ws,methods:cn,computed:cn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:cn,directives:cn,watch:Xa,provide:Vs,inject:Ya};function Vs(e,t){return t?e?function(){return Ce(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function Ya(e,t){return cn(Bs(e),Bs(t))}function Bs(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?Ce(Object.create(null),e,t):t}function Ws(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Ce(Object.create(null),Ds(e),Ds(t??{})):t}function Xa(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const i in t)n[i]=Te(e[i],t[i]);return n}function qs(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ec=0;function tc(e,t){return function(i,r=null){te(i)||(i=Ce({},i)),r!=null&&!fe(r)&&(r=null);const s=qs(),l=new WeakSet;let o=!1;const a=s.app={_uid:ec++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Sc,get config(){return s.config},set config(c){},use(c,...f){return l.has(c)||(c&&te(c.install)?(l.add(c),c.install(a,...f)):te(c)&&(l.add(c),c(a,...f))),a},mixin(c){return a},component(c,f){return f?(s.components[c]=f,a):s.components[c]},directive(c,f){return f?(s.directives[c]=f,a):s.directives[c]},mount(c,f,p){if(!o){const d=se(i,r);return d.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),f&&t?t(d,c):e(d,c,p),o=!0,a._container=c,c.__vue_app__=a,si(d.component)||d.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,f){return s.provides[c]=f,a},runWithContext(c){const f=un;un=a;try{return c()}finally{un=f}}};return a}}let un=null;function nc(e,t){if(Re){let n=Re.provides;const i=Re.parent&&Re.parent.provides;i===n&&(n=Re.provides=Object.create(i)),n[e]=t}}function Xn(e,t,n=!1){const i=Re||Ee;if(i||un){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:un._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&te(t)?t.call(i&&i.proxy):t}}function ic(e,t,n,i=!1){const r={},s={};jn(s,ti,1),e.propsDefaults=Object.create(null),Ks(e,t,r,s);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);n?e.props=i?r:xa(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function rc(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:l}}=e,o=X(r),[a]=e.propsOptions;let c=!1;if((i||l>0)&&!(l&16)){if(l&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let d=f[p];if(qn(e.emitsOptions,d))continue;const m=t[d];if(a)if(J(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const S=Ve(d);r[S]=er(a,o,S,m,e,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Ks(e,t,r,s)&&(c=!0);let f;for(const p in o)(!t||!J(t,p)&&((f=zt(p))===p||!J(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=er(a,o,p,void 0,e,!0)):delete r[p]);if(s!==o)for(const p in s)(!t||!J(t,p))&&(delete s[p],c=!0)}c&&Je(e,"set","$attrs")}function Ks(e,t,n,i){const[r,s]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(Qt(a))continue;const c=t[a];let f;r&&J(r,f=Ve(a))?!s||!s.includes(f)?n[f]=c:(o||(o={}))[f]=c:qn(e.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,l=!0)}if(s){const a=X(n),c=o||ce;for(let f=0;f<s.length;f++){const p=s[f];n[p]=er(r,a,p,c[p],e,!J(c,p))}}return l}function er(e,t,n,i,r,s){const l=e[n];if(l!=null){const o=J(l,"default");if(o&&i===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&te(a)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const f=ar(r);i=c[n]=a.call(null,t),f()}}else i=a}l[0]&&(s&&!o?i=!1:l[1]&&(i===""||i===zt(n))&&(i=!0))}return i}function sc(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,l={},o=[];if(!s&&!!1)return fe(e)&&i.set(e,Lt),Lt;if(V(s))for(let f=0;f<s.length;f++){const p=Ve(s[f]);Zs(p)&&(l[p]=ce)}else if(s)for(const f in s){const p=Ve(f);if(Zs(p)){const d=s[f],m=l[p]=V(d)||te(d)?{type:d}:Ce({},d);if(m){const S=Js(Boolean,m.type),x=Js(String,m.type);m[0]=S>-1,m[1]=x<0||S<x,(S>-1||J(m,"default"))&&o.push(p)}}}const c=[l,o];return fe(e)&&i.set(e,c),c}function Zs(e){return e[0]!=="$"&&!Qt(e)}function Gs(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Qs(e,t){return Gs(e)===Gs(t)}function Js(e,t){return V(t)?t.findIndex(n=>Qs(n,e)):te(t)&&Qs(t,e)?0:-1}const Ys=e=>e[0]==="_"||e==="$stable",tr=e=>V(e)?e.map(qe):[qe(e)],lc=(e,t,n)=>{if(t._n)return t;const i=Oa((...r)=>tr(t(...r)),n);return i._c=!1,i},Xs=(e,t,n)=>{const i=e._ctx;for(const r in e){if(Ys(r))continue;const s=e[r];if(te(s))t[r]=lc(r,s,i);else if(s!=null){const l=tr(s);t[r]=()=>l}}},el=(e,t)=>{const n=tr(t);e.slots.default=()=>n},oc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),jn(t,"_",n)):Xs(t,e.slots={})}else e.slots={},t&&el(e,t);jn(e.slots,ti,1)},ac=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,l=ce;if(i.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(Ce(r,t),!n&&o===1&&delete r._):(s=!t.$stable,Xs(t,r)),l=t}else t&&(el(e,t),l={default:1});if(s)for(const o in r)!Ys(o)&&l[o]==null&&delete r[o]};function nr(e,t,n,i,r=!1){if(V(e)){e.forEach((d,m)=>nr(d,t&&(V(t)?t[m]:t),n,i,r));return}if(Qn(i)&&!r)return;const s=i.shapeFlag&4?si(i.component)||i.component.proxy:i.el,l=r?null:s,{i:o,r:a}=e,c=t&&t.r,f=o.refs===ce?o.refs={}:o.refs,p=o.setupState;if(c!=null&&c!==a&&(we(c)?(f[c]=null,J(p,c)&&(p[c]=null)):$e(c)&&(c.value=null)),te(a))ut(a,o,12,[l,f]);else{const d=we(a),m=$e(a);if(d||m){const S=()=>{if(e.f){const x=d?J(p,a)?p[a]:f[a]:a.value;r?V(x)&&Yr(x,s):V(x)?x.includes(s)||x.push(s):d?(f[a]=[s],J(p,a)&&(p[a]=f[a])):(a.value=[s],e.k&&(f[e.k]=a.value))}else d?(f[a]=l,J(p,a)&&(p[a]=l)):m&&(a.value=l,e.k&&(f[e.k]=l))};l?(S.id=-1,Ae(S,n)):S()}}}function cc(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Mi().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ae=Va;function uc(e){return fc(e)}function fc(e,t){cc();const n=Mi();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:l,createText:o,createComment:a,setText:c,setElementText:f,parentNode:p,nextSibling:d,setScopeId:m=Qe,insertStaticContent:S}=e,x=(u,h,g,v=null,y=null,k=null,E=void 0,_=null,$=!!h.dynamicChildren)=>{if(u===h)return;u&&!dn(u,h)&&(v=vt(u),Oe(u,y,k,!0),u=null),h.patchFlag===-2&&($=!1,h.dynamicChildren=null);const{type:b,ref:I,shapeFlag:U}=h;switch(b){case ei:C(u,h,g,v);break;case Et:w(u,h,g,v);break;case rr:u==null&&T(h,g,v,E);break;case oe:ve(u,h,g,v,y,k,E,_,$);break;default:U&1?P(u,h,g,v,y,k,E,_,$):U&6?q(u,h,g,v,y,k,E,_,$):(U&64||U&128)&&b.process(u,h,g,v,y,k,E,_,$,Ze)}I!=null&&y&&nr(I,u&&u.ref,k,h||u,!h)},C=(u,h,g,v)=>{if(u==null)i(h.el=o(h.children),g,v);else{const y=h.el=u.el;h.children!==u.children&&c(y,h.children)}},w=(u,h,g,v)=>{u==null?i(h.el=a(h.children||""),g,v):h.el=u.el},T=(u,h,g,v)=>{[u.el,u.anchor]=S(u.children,h,g,v,u.el,u.anchor)},j=({el:u,anchor:h},g,v)=>{let y;for(;u&&u!==h;)y=d(u),i(u,g,v),u=y;i(h,g,v)},N=({el:u,anchor:h})=>{let g;for(;u&&u!==h;)g=d(u),r(u),u=g;r(h)},P=(u,h,g,v,y,k,E,_,$)=>{h.type==="svg"?E="svg":h.type==="math"&&(E="mathml"),u==null?z(h,g,v,y,k,E,_,$):Q(u,h,y,k,E,_,$)},z=(u,h,g,v,y,k,E,_)=>{let $,b;const{props:I,shapeFlag:U,transition:R,dirs:H}=u;if($=u.el=l(u.type,k,I&&I.is,I),U&8?f($,u.children):U&16&&B(u.children,$,null,v,y,ir(u,k),E,_),H&&Ct(u,null,v,"created"),W($,u,u.scopeId,E,v),I){for(const re in I)re!=="value"&&!Qt(re)&&s($,re,null,I[re],k,u.children,v,y,ze);"value"in I&&s($,"value",null,I.value,k),(b=I.onVnodeBeforeMount)&&Ke(b,v,u)}H&&Ct(u,null,v,"beforeMount");const Z=hc(y,R);Z&&R.beforeEnter($),i($,h,g),((b=I&&I.onVnodeMounted)||Z||H)&&Ae(()=>{b&&Ke(b,v,u),Z&&R.enter($),H&&Ct(u,null,v,"mounted")},y)},W=(u,h,g,v,y)=>{if(g&&m(u,g),v)for(let k=0;k<v.length;k++)m(u,v[k]);if(y){let k=y.subTree;if(h===k){const E=y.vnode;W(u,E,E.scopeId,E.slotScopeIds,y.parent)}}},B=(u,h,g,v,y,k,E,_,$=0)=>{for(let b=$;b<u.length;b++){const I=u[b]=_?ht(u[b]):qe(u[b]);x(null,I,h,g,v,y,k,E,_)}},Q=(u,h,g,v,y,k,E)=>{const _=h.el=u.el;let{patchFlag:$,dynamicChildren:b,dirs:I}=h;$|=u.patchFlag&16;const U=u.props||ce,R=h.props||ce;let H;if(g&&$t(g,!1),(H=R.onVnodeBeforeUpdate)&&Ke(H,g,h,u),I&&Ct(h,u,g,"beforeUpdate"),g&&$t(g,!0),b?ae(u.dynamicChildren,b,_,g,v,ir(h,y),k):E||ke(u,h,_,null,g,v,ir(h,y),k,!1),$>0){if($&16)_e(_,h,U,R,g,v,y);else if($&2&&U.class!==R.class&&s(_,"class",null,R.class,y),$&4&&s(_,"style",U.style,R.style,y),$&8){const Z=h.dynamicProps;for(let re=0;re<Z.length;re++){const ue=Z[re],me=U[ue],Ne=R[ue];(Ne!==me||ue==="value")&&s(_,ue,me,Ne,y,u.children,g,v,ze)}}$&1&&u.children!==h.children&&f(_,h.children)}else!E&&b==null&&_e(_,h,U,R,g,v,y);((H=R.onVnodeUpdated)||I)&&Ae(()=>{H&&Ke(H,g,h,u),I&&Ct(h,u,g,"updated")},v)},ae=(u,h,g,v,y,k,E)=>{for(let _=0;_<h.length;_++){const $=u[_],b=h[_],I=$.el&&($.type===oe||!dn($,b)||$.shapeFlag&70)?p($.el):g;x($,b,I,null,v,y,k,E,!0)}},_e=(u,h,g,v,y,k,E)=>{if(g!==v){if(g!==ce)for(const _ in g)!Qt(_)&&!(_ in v)&&s(u,_,g[_],null,E,h.children,y,k,ze);for(const _ in v){if(Qt(_))continue;const $=v[_],b=g[_];$!==b&&_!=="value"&&s(u,_,b,$,E,h.children,y,k,ze)}"value"in v&&s(u,"value",g.value,v.value,E)}},ve=(u,h,g,v,y,k,E,_,$)=>{const b=h.el=u?u.el:o(""),I=h.anchor=u?u.anchor:o("");let{patchFlag:U,dynamicChildren:R,slotScopeIds:H}=h;H&&(_=_?_.concat(H):H),u==null?(i(b,g,v),i(I,g,v),B(h.children||[],g,I,y,k,E,_,$)):U>0&&U&64&&R&&u.dynamicChildren?(ae(u.dynamicChildren,R,g,y,k,E,_),(h.key!=null||y&&h===y.subTree)&&tl(u,h,!0)):ke(u,h,g,I,y,k,E,_,$)},q=(u,h,g,v,y,k,E,_,$)=>{h.slotScopeIds=_,u==null?h.shapeFlag&512?y.ctx.activate(h,g,v,E,$):D(h,g,v,y,k,E,$):ie(u,h,$)},D=(u,h,g,v,y,k,E)=>{const _=u.component=kc(u,v,y);if(qa(u)&&(_.ctx.renderer=Ze),_c(_),_.asyncDep){if(y&&y.registerDep(_,ge),!u.el){const $=_.subTree=se(Et);w(null,$,h,g)}}else ge(_,u,h,g,y,k,E)},ie=(u,h,g)=>{const v=h.component=u.component;if(Pa(u,h,g))if(v.asyncDep&&!v.asyncResolved){de(v,h,g);return}else v.next=h,Sa(v.update),v.effect.dirty=!0,v.update();else h.el=u.el,v.vnode=h},ge=(u,h,g,v,y,k,E)=>{const _=()=>{if(u.isMounted){let{next:I,bu:U,u:R,parent:H,vnode:Z}=u;{const At=nl(u);if(At){I&&(I.el=Z.el,de(u,I,E)),At.asyncDep.then(()=>{u.isUnmounted||_()});return}}let re=I,ue;$t(u,!1),I?(I.el=Z.el,de(u,I,E)):I=Z,U&&zn(U),(ue=I.props&&I.props.onVnodeBeforeUpdate)&&Ke(ue,H,I,Z),$t(u,!0);const me=Qi(u),Ne=u.subTree;u.subTree=me,x(Ne,me,p(Ne.el),vt(Ne),u,y,k),I.el=me.el,re===null&&Fa(u,me.el),R&&Ae(R,y),(ue=I.props&&I.props.onVnodeUpdated)&&Ae(()=>Ke(ue,H,I,Z),y)}else{let I;const{el:U,props:R}=h,{bm:H,m:Z,parent:re}=u,ue=Qn(h);if($t(u,!1),H&&zn(H),!ue&&(I=R&&R.onVnodeBeforeMount)&&Ke(I,re,h),$t(u,!0),U&&A){const me=()=>{u.subTree=Qi(u),A(U,u.subTree,u,y,null)};ue?h.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=Qi(u);x(null,me,g,v,u,y,k),h.el=me.el}if(Z&&Ae(Z,y),!ue&&(I=R&&R.onVnodeMounted)){const me=h;Ae(()=>Ke(I,re,me),y)}(h.shapeFlag&256||re&&Qn(re.vnode)&&re.vnode.shapeFlag&256)&&u.a&&Ae(u.a,y),u.isMounted=!0,h=g=v=null}},$=u.effect=new ji(_,Qe,()=>Gi(b),u.scope),b=u.update=()=>{$.dirty&&$.run()};b.id=u.uid,$t(u,!0),b()},de=(u,h,g)=>{h.component=u;const v=u.vnode.props;u.vnode=h,u.next=null,rc(u,h.props,v,g),ac(u,h.children,g),jt(),Ms(u),Pt()},ke=(u,h,g,v,y,k,E,_,$=!1)=>{const b=u&&u.children,I=u?u.shapeFlag:0,U=h.children,{patchFlag:R,shapeFlag:H}=h;if(R>0){if(R&128){rt(b,U,g,v,y,k,E,_,$);return}else if(R&256){ye(b,U,g,v,y,k,E,_,$);return}}H&8?(I&16&&ze(b,y,k),U!==b&&f(g,U)):I&16?H&16?rt(b,U,g,v,y,k,E,_,$):ze(b,y,k,!0):(I&8&&f(g,""),H&16&&B(U,g,v,y,k,E,_,$))},ye=(u,h,g,v,y,k,E,_,$)=>{u=u||Lt,h=h||Lt;const b=u.length,I=h.length,U=Math.min(b,I);let R;for(R=0;R<U;R++){const H=h[R]=$?ht(h[R]):qe(h[R]);x(u[R],H,g,null,y,k,E,_,$)}b>I?ze(u,y,k,!0,!1,U):B(h,g,v,y,k,E,_,$,U)},rt=(u,h,g,v,y,k,E,_,$)=>{let b=0;const I=h.length;let U=u.length-1,R=I-1;for(;b<=U&&b<=R;){const H=u[b],Z=h[b]=$?ht(h[b]):qe(h[b]);if(dn(H,Z))x(H,Z,g,null,y,k,E,_,$);else break;b++}for(;b<=U&&b<=R;){const H=u[U],Z=h[R]=$?ht(h[R]):qe(h[R]);if(dn(H,Z))x(H,Z,g,null,y,k,E,_,$);else break;U--,R--}if(b>U){if(b<=R){const H=R+1,Z=H<I?h[H].el:v;for(;b<=R;)x(null,h[b]=$?ht(h[b]):qe(h[b]),g,Z,y,k,E,_,$),b++}}else if(b>R)for(;b<=U;)Oe(u[b],y,k,!0),b++;else{const H=b,Z=b,re=new Map;for(b=Z;b<=R;b++){const Ie=h[b]=$?ht(h[b]):qe(h[b]);Ie.key!=null&&re.set(Ie.key,b)}let ue,me=0;const Ne=R-Z+1;let At=!1,$r=0;const Kt=new Array(Ne);for(b=0;b<Ne;b++)Kt[b]=0;for(b=H;b<=U;b++){const Ie=u[b];if(me>=Ne){Oe(Ie,y,k,!0);continue}let De;if(Ie.key!=null)De=re.get(Ie.key);else for(ue=Z;ue<=R;ue++)if(Kt[ue-Z]===0&&dn(Ie,h[ue])){De=ue;break}De===void 0?Oe(Ie,y,k,!0):(Kt[De-Z]=b+1,De>=$r?$r=De:At=!0,x(Ie,h[De],g,null,y,k,E,_,$),me++)}const Er=At?dc(Kt):Lt;for(ue=Er.length-1,b=Ne-1;b>=0;b--){const Ie=Z+b,De=h[Ie],Tr=Ie+1<I?h[Ie+1].el:v;Kt[b]===0?x(null,De,g,Tr,y,k,E,_,$):At&&(ue<0||b!==Er[ue]?mt(De,g,Tr,2):ue--)}}},mt=(u,h,g,v,y=null)=>{const{el:k,type:E,transition:_,children:$,shapeFlag:b}=u;if(b&6){mt(u.component.subTree,h,g,v);return}if(b&128){u.suspense.move(h,g,v);return}if(b&64){E.move(u,h,g,Ze);return}if(E===oe){i(k,h,g);for(let U=0;U<$.length;U++)mt($[U],h,g,v);i(u.anchor,h,g);return}if(E===rr){j(u,h,g);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(k),i(k,h,g),Ae(()=>_.enter(k),y);else{const{leave:U,delayLeave:R,afterLeave:H}=_,Z=()=>i(k,h,g),re=()=>{U(k,()=>{Z(),H&&H()})};R?R(k,Z,re):re()}else i(k,h,g)},Oe=(u,h,g,v=!1,y=!1)=>{const{type:k,props:E,ref:_,children:$,dynamicChildren:b,shapeFlag:I,patchFlag:U,dirs:R}=u;if(_!=null&&nr(_,null,g,u,!0),I&256){h.ctx.deactivate(u);return}const H=I&1&&R,Z=!Qn(u);let re;if(Z&&(re=E&&E.onVnodeBeforeUnmount)&&Ke(re,h,u),I&6)xi(u.component,g,v);else{if(I&128){u.suspense.unmount(g,v);return}H&&Ct(u,null,h,"beforeUnmount"),I&64?u.type.remove(u,h,g,y,Ze,v):b&&(k!==oe||U>0&&U&64)?ze(b,h,g,!1,!0):(k===oe&&U&384||!y&&I&16)&&ze($,h,g),v&&Wt(u)}(Z&&(re=E&&E.onVnodeUnmounted)||H)&&Ae(()=>{re&&Ke(re,h,u),H&&Ct(u,null,h,"unmounted")},g)},Wt=u=>{const{type:h,el:g,anchor:v,transition:y}=u;if(h===oe){ki(g,v);return}if(h===rr){N(u);return}const k=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:E,delayLeave:_}=y,$=()=>E(g,k);_?_(u.el,k,$):$()}else k()},ki=(u,h)=>{let g;for(;u!==h;)g=d(u),r(u),u=g;r(h)},xi=(u,h,g)=>{const{bum:v,scope:y,update:k,subTree:E,um:_}=u;v&&zn(v),y.stop(),k&&(k.active=!1,Oe(E,u,h,g)),_&&Ae(_,h),Ae(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ze=(u,h,g,v=!1,y=!1,k=0)=>{for(let E=k;E<u.length;E++)Oe(u[E],h,g,v,y)},vt=u=>u.shapeFlag&6?vt(u.component.subTree):u.shapeFlag&128?u.suspense.next():d(u.anchor||u.el);let St=!1;const qt=(u,h,g)=>{u==null?h._vnode&&Oe(h._vnode,null,null,!0):x(h._vnode||null,u,h,null,null,null,g),St||(St=!0,Ms(),Os(),St=!1),h._vnode=u},Ze={p:x,um:Oe,m:mt,r:Wt,mt:D,mc:B,pc:ke,pbc:ae,n:vt,o:e};let M,A;return t&&([M,A]=t(Ze)),{render:qt,hydrate:M,createApp:tc(qt,M)}}function ir({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function $t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function tl(e,t,n=!1){const i=e.children,r=t.children;if(V(i)&&V(r))for(let s=0;s<i.length;s++){const l=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ht(r[s]),o.el=l.el),n||tl(l,o)),o.type===ei&&(o.el=l.el)}}function dc(e){const t=e.slice(),n=[0];let i,r,s,l,o;const a=e.length;for(i=0;i<a;i++){const c=e[i];if(c!==0){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}for(s=0,l=n.length-1;s<l;)o=s+l>>1,e[n[o]]<c?s=o+1:l=o;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,l=n[s-1];s-- >0;)n[s]=l,l=t[l];return n}function nl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:nl(t)}const pc=e=>e.__isTeleport,oe=Symbol.for("v-fgt"),ei=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),rr=Symbol.for("v-stc"),fn=[];let He=null;function L(e=!1){fn.push(He=e?null:[])}function gc(){fn.pop(),He=fn[fn.length-1]||null}let hn=1;function il(e){hn+=e}function rl(e){return e.dynamicChildren=hn>0?He||Lt:null,gc(),hn>0&&He&&He.push(e),e}function O(e,t,n,i,r,s){return rl(F(e,t,n,i,r,s,!0))}function Ye(e,t,n,i,r){return rl(se(e,t,n,i,r,!0))}function sr(e){return e?e.__v_isVNode===!0:!1}function dn(e,t){return e.type===t.type&&e.key===t.key}const ti="__vInternal",sl=({key:e})=>e??null,ni=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||$e(e)||te(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function F(e,t=null,n=null,i=0,r=null,s=e===oe?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sl(t),ref:t&&ni(t),scopeId:js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return o?(lr(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=we(n)?8:16),hn>0&&!l&&He&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&He.push(a),a}const se=mc;function mc(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===Na)&&(e=Et),sr(e)){const o=Ht(e,t,!0);return n&&lr(o,n),hn>0&&!s&&He&&(o.shapeFlag&6?He[He.indexOf(e)]=o:He.push(o)),o.patchFlag|=-2,o}if(Rc(e)&&(e=e.__vccOpts),t){t=vc(t);let{class:o,style:a}=t;o&&!we(o)&&(t.class=pe(o)),fe(a)&&($s(a)&&!V(a)&&(a=Ce({},a)),t.style=Yt(a))}const l=we(e)?1:Da(e)?128:pc(e)?64:fe(e)?4:te(e)?2:0;return F(e,t,n,i,r,l,s,!0)}function vc(e){return e?$s(e)||ti in e?Ce({},e):e:null}function Ht(e,t,n=!1){const{props:i,ref:r,patchFlag:s,children:l}=e,o=t?yc(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&sl(o),ref:t&&t.ref?n&&r?V(r)?r.concat(ni(t)):[r,ni(t)]:ni(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Xe(e=" ",t=0){return se(ei,null,e,t)}function Y(e="",t=!1){return t?(L(),Ye(Et,null,e)):se(Et,null,e)}function qe(e){return e==null||typeof e=="boolean"?se(Et):V(e)?se(oe,null,e.slice()):typeof e=="object"?ht(e):se(ei,null,String(e))}function ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function lr(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),lr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(ti in t)?t._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),i&64?(n=16,t=[Xe(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=pe([t.class,i.class]));else if(r==="style")t.style=Yt([t.style,i.style]);else if(Ln(r)){const s=t[r],l=i[r];l&&s!==l&&!(V(s)&&s.includes(l))&&(t[r]=s?[].concat(s,l):l)}else r!==""&&(t[r]=i[r])}return t}function Ke(e,t,n,i=null){Be(e,t,7,[n,i])}const wc=qs();let bc=0;function kc(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||wc,s={uid:bc++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ta(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sc(i,r),emitsOptions:Ma(i,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=La.bind(null,s),e.ce&&e.ce(s),s}let Re=null;const xc=()=>Re||Ee;let ii,or;{const e=Mi(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(l=>l(s)):r[0](s)}};ii=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),or=t("__VUE_SSR_SETTERS__",n=>ri=n)}const ar=e=>{const t=Re;return ii(e),e.scope.on(),()=>{e.scope.off(),ii(t)}},ll=()=>{Re&&Re.scope.off(),ii(null)};function ol(e){return e.vnode.shapeFlag&4}let ri=!1;function _c(e,t=!1){t&&or(t);const{props:n,children:i}=e.vnode,r=ol(e);ic(e,n,r,t),oc(e,i);const s=r?Cc(e,t):void 0;return t&&or(!1),s}function Cc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Es(new Proxy(e.ctx,Ga));const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?Ec(e):null,s=ar(e);jt();const l=ut(i,e,0,[e.props,r]);if(Pt(),s(),es(l)){if(l.then(ll,ll),t)return l.then(o=>{al(e,o,t)}).catch(o=>{Wn(o,e,0)});e.asyncDep=l}else al(e,l,t)}else ul(e,t)}function al(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=As(t)),ul(e,n)}let cl;function ul(e,t,n){const i=e.type;if(!e.render){if(!t&&cl&&!i.render){const r=i.template||Qa(e).template;if(r){const{isCustomElement:s,compilerOptions:l}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Ce(Ce({isCustomElement:s,delimiters:o},l),a);i.render=cl(r,c)}}e.render=i.render||Qe}}function $c(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}}))}function Ec(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return $c(e)},slots:e.slots,emit:e.emit,expose:t}}function si(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(As(Es(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in an)return an[n](e)},has(t,n){return n in t||n in an}}))}function Tc(e,t=!0){return te(e)?e.displayName||e.name:e.name||t&&e.__name}function Rc(e){return te(e)&&"__vccOpts"in e}const be=(e,t)=>_a(e,t,ri);function ee(e,t,n){const i=arguments.length;return i===2?fe(t)&&!V(t)?sr(t)?se(e,null,[t]):se(e,t):se(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sr(n)&&(n=[n]),se(e,t,n))}const Sc="3.4.19";
                const Ac="http://www.w3.org/2000/svg",Ic="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,fl=dt&&dt.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?dt.createElementNS(Ac,e):t==="mathml"?dt.createElementNS(Ic,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const l=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{fl.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const o=fl.content;if(i==="svg"||i==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Mc=Symbol("_vtc");function Oc(e,t,n){const i=e[Mc];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const pn=Symbol("_vod"),hl={beforeMount(e,{value:t},{transition:n}){e[pn]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):gn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t==!n&&(e.style.display===e[pn]||!t)||(i?t?(i.beforeEnter(e),gn(e,!0),i.enter(e)):i.leave(e,()=>{gn(e,!1)}):gn(e,t))},beforeUnmount(e,{value:t}){gn(e,t)}};function gn(e,t){e.style.display=t?e[pn]:"none"}const zc=Symbol(""),jc=/(^|;)\s*display\s*:/;function Pc(e,t,n){const i=e.style,r=we(n),s=i.display;let l=!1;if(n&&!r){if(t&&!we(t))for(const o in t)n[o]==null&&cr(i,o,"");for(const o in n)o==="display"&&(l=!0),cr(i,o,n[o])}else if(r){if(t!==n){const o=i[zc];o&&(n+=";"+o),i.cssText=n,l=jc.test(n)}}else t&&e.removeAttribute("style");pn in e&&(e[pn]=l?i.display:"",i.display=s)}const dl=/\s*!important$/;function cr(e,t,n){if(V(n))n.forEach(i=>cr(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Fc(e,t);dl.test(n)?e.setProperty(zt(i),n.replace(dl,""),"important"):e[i]=n}}const pl=["Webkit","Moz","ms"],ur={};function Fc(e,t){const n=ur[t];if(n)return n;let i=Ve(t);if(i!=="filter"&&i in e)return ur[t]=i;i=On(i);for(let r=0;r<pl.length;r++){const s=pl[r]+i;if(s in e)return ur[t]=s}return t}const gl="http://www.w3.org/1999/xlink";function Uc(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(gl,t.slice(6,t.length)):e.setAttributeNS(gl,t,n);else{const s=Xo(t);n==null||s&&!rs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Nc(e,t,n,i,r,s,l){if(t==="innerHTML"||t==="textContent"){i&&l(i,r,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=rs(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function et(e,t,n,i){e.addEventListener(t,n,i)}function Hc(e,t,n,i){e.removeEventListener(t,n,i)}const ml=Symbol("_vei");function Dc(e,t,n,i,r=null){const s=e[ml]||(e[ml]={}),l=s[t];if(i&&l)l.value=i;else{const[o,a]=Vc(t);if(i){const c=s[t]=qc(i,r);et(e,o,c,a)}else l&&(Hc(e,o,l,a),s[t]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(vl.test(e)){t={};let i;for(;i=e.match(vl);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let fr=0;const Bc=Promise.resolve(),Wc=()=>fr||(Bc.then(()=>fr=0),fr=Date.now());function qc(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Be(Kc(i,n.value),t,5,[i])};return n.value=e,n.attached=Wc(),n}function Kc(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const yl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Zc=(e,t,n,i,r,s,l,o,a)=>{const c=r==="svg";t==="class"?Oc(e,i,c):t==="style"?Pc(e,n,i):Ln(t)?Ai(t)||Dc(e,t,n,i,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gc(e,t,i,c))?Nc(e,t,i,s,l,o,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Uc(e,t,i,c))};function Gc(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&yl(t)&&te(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yl(t)&&we(n)?!1:t in e}const pt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>zn(t,n):t};function Qc(e){e.target.composing=!0}function wl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ue=Symbol("_assign"),hr={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[Ue]=pt(r);const s=i||r.props&&r.props.type==="number";et(e,t?"change":"input",l=>{if(l.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Jt(o)),e[Ue](o)}),n&&et(e,"change",()=>{e.value=e.value.trim()}),t||(et(e,"compositionstart",Qc),et(e,"compositionend",wl),et(e,"change",wl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e[Ue]=pt(s),e.composing)return;const l=r||e.type==="number"?Jt(e.value):e.value,o=t??"";l!==o&&(document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===o)||(e.value=o))}},Jc={deep:!0,created(e,t,n){e[Ue]=pt(n),et(e,"change",()=>{const i=e._modelValue,r=Dt(e),s=e.checked,l=e[Ue];if(V(i)){const o=Oi(i,r),a=o!==-1;if(s&&!a)l(i.concat(r));else if(!s&&a){const c=[...i];c.splice(o,1),l(c)}}else if(Ot(i)){const o=new Set(i);s?o.add(r):o.delete(r),l(o)}else l(xl(e,s))})},mounted:bl,beforeUpdate(e,t,n){e[Ue]=pt(n),bl(e,t,n)}};function bl(e,{value:t,oldValue:n},i){e._modelValue=t,V(t)?e.checked=Oi(t,i.props.value)>-1:Ot(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=wt(t,xl(e,!0)))}const Yc={created(e,{value:t},n){e.checked=wt(t,n.props.value),e[Ue]=pt(n),et(e,"change",()=>{e[Ue](Dt(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e[Ue]=pt(i),t!==n&&(e.checked=wt(t,i.props.value))}},Xc={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const r=Ot(t);et(e,"change",()=>{const s=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>n?Jt(Dt(l)):Dt(l));e[Ue](e.multiple?r?new Set(s):s:s[0]),e._assigning=!0,rn(()=>{e._assigning=!1})}),e[Ue]=pt(i)},mounted(e,{value:t,oldValue:n,modifiers:{number:i}}){kl(e,t,n,i)},beforeUpdate(e,t,n){e[Ue]=pt(n)},updated(e,{value:t,oldValue:n,modifiers:{number:i}}){e._assigning||kl(e,t,n,i)}};function kl(e,t,n,i){const r=e.multiple,s=V(t);if(!(r&&!s&&!Ot(t))){for(let l=0,o=e.options.length;l<o;l++){const a=e.options[l],c=Dt(a);if(r)if(s){const f=typeof c;f==="string"||f==="number"?a.selected=t.includes(i?Jt(c):c):a.selected=Oi(t,c)>-1}else a.selected=t.has(c);else if(wt(Dt(a),t)){e.selectedIndex!==l&&(e.selectedIndex=l);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Dt(e){return"_value"in e?e._value:e.value}function xl(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const eu={created(e,t,n){li(e,t,n,null,"created")},mounted(e,t,n){li(e,t,n,null,"mounted")},beforeUpdate(e,t,n,i){li(e,t,n,i,"beforeUpdate")},updated(e,t,n,i){li(e,t,n,i,"updated")}};function tu(e,t){switch(e){case"SELECT":return Xc;case"TEXTAREA":return hr;default:switch(t){case"checkbox":return Jc;case"radio":return Yc;default:return hr}}}function li(e,t,n,i,r){const l=tu(e.tagName,n.props&&n.props.type)[r];l&&l(e,t,n,i)}const nu=Ce({patchProp:Zc},Lc);let _l;function iu(){return _l||(_l=uc(nu))}const ru=(...e)=>{const t=iu().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=lu(i);if(!r)return;const s=t._component;!te(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const l=n(r,!1,su(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function su(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lu(e){return we(e)?document.querySelector(e):e}function mn(e){return ls()?(ia(e),!0):!1}function tt(e){return typeof e=="function"?e():G(e)}const oi=typeof window<"u"&&typeof document<"u",ou=Object.prototype.toString,au=e=>ou.call(e)==="[object Object]",ai=()=>{};function Cl(e,t){function n(...i){return new Promise((r,s)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(r).catch(s)})}return n}const $l=e=>e();function cu(e,t={}){let n,i,r=ai;const s=o=>{clearTimeout(o),r(),r=ai};return o=>{const a=tt(e),c=tt(t.maxWait);return n&&s(n),a<=0||c!==void 0&&c<=0?(i&&(s(i),i=null),Promise.resolve(o())):new Promise((f,p)=>{r=t.rejectOnCancel?p:f,c&&!i&&(i=setTimeout(()=>{n&&s(n),i=null,f(o())},c)),n=setTimeout(()=>{i&&s(i),i=null,f(o())},a)})}}function uu(e=$l){const t=K(!0);function n(){t.value=!1}function i(){t.value=!0}const r=(...s)=>{t.value&&e(...s)};return{isActive:en(t),pause:n,resume:i,eventFilter:r}}function El(e){return e||xc()}function fu(e,t=200,n={}){return Cl(cu(t,n),e)}function hu(e,t,n={}){const{eventFilter:i=$l,...r}=n;return Pe(e,Cl(i,t),r)}function du(e,t,n={}){const{eventFilter:i,...r}=n,{eventFilter:s,pause:l,resume:o,isActive:a}=uu(i);return{stop:hu(e,t,{...r,eventFilter:s}),pause:l,resume:o,isActive:a}}function dr(e,t=!0,n){El()?on(e,n):t?e():rn(e)}function pu(e,t){El(t)&&Jn(e,t)}function gu(e,t=1e3,n={}){const{immediate:i=!0,immediateCallback:r=!1}=n;let s=null;const l=K(!1);function o(){s&&(clearInterval(s),s=null)}function a(){l.value=!1,o()}function c(){const f=tt(t);f<=0||(l.value=!0,r&&e(),o(),s=setInterval(e,f))}if(i&&oi&&c(),$e(t)||typeof t=="function"){const f=Pe(t,()=>{l.value&&oi&&c()});mn(f)}return mn(a),{isActive:l,pause:a,resume:c}}function mu(e){var t;const n=tt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ci=oi?window:void 0,Tl=oi?window.document:void 0;function Rl(...e){let t,n,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,r]=e,t=ci):[t,n,i,r]=e,!t)return ai;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const s=[],l=()=>{s.forEach(f=>f()),s.length=0},o=(f,p,d,m)=>(f.addEventListener(p,d,m),()=>f.removeEventListener(p,d,m)),a=Pe(()=>[mu(t),tt(r)],([f,p])=>{if(l(),!f)return;const d=au(p)?{...p}:p;s.push(...n.flatMap(m=>i.map(S=>o(f,m,S,d))))},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return mn(c),c}function vu(e,t={}){const{immediate:n=!0,fpsLimit:i=void 0,window:r=ci}=t,s=K(!1),l=i?1e3/i:null;let o=0,a=null;function c(d){if(!s.value||!r)return;o||(o=d);const m=d-o;if(l&&m<l){a=r.requestAnimationFrame(c);return}o=d,e({delta:m,timestamp:d}),a=r.requestAnimationFrame(c)}function f(){!s.value&&r&&(s.value=!0,o=0,a=r.requestAnimationFrame(c))}function p(){s.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return n&&f(),mn(p),{isActive:en(s),pause:p,resume:f}}const ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fi="__vueuse_ssr_handlers__",yu=wu();function wu(){return fi in ui||(ui[fi]=ui[fi]||{}),ui[fi]}function bu(e,t){return yu[e]||t}function ku(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const xu={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Sl="vueuse-storage";function Vt(e,t,n,i={}){var r;const{flush:s="pre",deep:l=!0,listenToStorageChanges:o=!0,writeDefaults:a=!0,mergeDefaults:c=!1,shallow:f,window:p=ci,eventFilter:d,onError:m=Q=>{console.error(Q)},initOnMounted:S}=i,x=(f?Ca:K)(typeof t=="function"?t():t);if(!n)try{n=bu("getDefaultStorage",()=>{var Q;return(Q=ci)==null?void 0:Q.localStorage})()}catch(Q){m(Q)}if(!n)return x;const C=tt(t),w=ku(C),T=(r=i.serializer)!=null?r:xu[w],{pause:j,resume:N}=du(x,()=>P(x.value),{flush:s,deep:l,eventFilter:d});return p&&o&&dr(()=>{Rl(p,"storage",B),Rl(p,Sl,W),S&&B()}),S||B(),x;function P(Q){try{const ae=n.getItem(e),_e=ve=>{p&&p.dispatchEvent(new CustomEvent(Sl,{detail:{key:e,oldValue:ae,newValue:ve,storageArea:n}}))};if(Q==null)_e(null),n.removeItem(e);else{const ve=T.write(Q);ae!==ve&&(n.setItem(e,ve),_e(ve))}}catch(ae){m(ae)}}function z(Q){const ae=Q?Q.newValue:n.getItem(e);if(ae==null)return a&&C!=null&&n.setItem(e,T.write(C)),C;if(!Q&&c){const _e=T.read(ae);return typeof c=="function"?c(_e,C):w==="object"&&!Array.isArray(_e)?{...C,..._e}:_e}else return typeof ae!="string"?ae:T.read(ae)}function W(Q){B(Q.detail)}function B(Q){if(!(Q&&Q.storageArea!==n)){if(Q&&Q.key==null){x.value=C;return}if(!(Q&&Q.key!==e)){j();try{(Q==null?void 0:Q.newValue)!==T.write(x.value)&&(x.value=z(Q))}catch(ae){m(ae)}finally{Q?rn(N):N()}}}}}function _u(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,i=K(new Date),r=()=>i.value=new Date,s=n==="requestAnimationFrame"?vu(r,{immediate:!0}):gu(r,n,{immediate:!0});return t?{now:i,...s}:i}function Cu(e,t=ai,n={}){const{immediate:i=!0,manual:r=!1,type:s="text/javascript",async:l=!0,crossOrigin:o,referrerPolicy:a,noModule:c,defer:f,document:p=Tl,attrs:d={}}=n,m=K(null);let S=null;const x=T=>new Promise((j,N)=>{const P=B=>(m.value=B,j(B),B);if(!p){j(!1);return}let z=!1,W=p.querySelector(`script[src="${tt(e)}"]`);W?W.hasAttribute("data-loaded")&&P(W):(W=p.createElement("script"),W.type=s,W.async=l,W.src=tt(e),f&&(W.defer=f),o&&(W.crossOrigin=o),c&&(W.noModule=c),a&&(W.referrerPolicy=a),Object.entries(d).forEach(([B,Q])=>W==null?void 0:W.setAttribute(B,Q)),z=!0),W.addEventListener("error",B=>N(B)),W.addEventListener("abort",B=>N(B)),W.addEventListener("load",()=>{W.setAttribute("data-loaded","true"),t(W),P(W)}),z&&(W=p.head.appendChild(W)),T||P(W)}),C=(T=!0)=>(S||(S=x(T)),S),w=()=>{if(!p)return;S=null,m.value&&(m.value=null);const T=p.querySelector(`script[src="${tt(e)}"]`);T&&p.head.removeChild(T)};return i&&!r&&dr(C),r||pu(w),{scriptTag:m,load:C,unload:w}}let $u=0;function Eu(e,t={}){const n=K(!1),{document:i=Tl,immediate:r=!0,manual:s=!1,id:l=`vueuse_styletag_${++$u}`}=t,o=K(e);let a=()=>{};const c=()=>{if(!i)return;const p=i.getElementById(l)||i.createElement("style");p.isConnected||(p.id=l,t.media&&(p.media=t.media),i.head.appendChild(p)),!n.value&&(a=Pe(o,d=>{p.textContent=d},{immediate:!0}),n.value=!0)},f=()=>{!i||!n.value||(a(),i.head.removeChild(i.getElementById(l)),n.value=!1)};return r&&!s&&dr(c),s||mn(f),{id:l,css:o,unload:f,load:c,isLoaded:en(n)}}const Tu=e=>!!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e),Ru=e=>{const t=Vt("WALINE_EMOJI",{}),n=Tu(e);if(n){const i=t.value[e];if(i)return Promise.resolve(i)}return fetch(`${e}/info.json`).then(i=>i.json()).then(i=>{const r={folder:e,...i};return n&&(t.value[e]=r),r})},Al=(e,t="",n="",i="")=>`${t?`${t}/`:""}${n}${e}${i?`.${i}`:""}`,Su=e=>Promise.all(e.map(t=>It(t)?Ru(Qr(t)):Promise.resolve(t))).then(t=>{const n={tabs:[],map:{}};return t.forEach(i=>{const{name:r,folder:s,icon:l,prefix:o,type:a,items:c}=i;n.tabs.push({name:r,icon:Al(l,s,o,a),items:c.map(f=>{const p=`${o||""}${f}`;return n.map[p]=Al(f,s,o,a),p})})}),n}),Il=e=>{e.name!=="AbortError"&&console.error(e.message)},pr=e=>e instanceof HTMLElement?e:It(e)?document.querySelector(e):null,Au=e=>e.type.includes("image"),Ll=e=>{const t=Array.from(e).find(Au);return t?t.getAsFile():null};function gr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Tt=gr();function Ml(e){Tt=e}const Ol=/[&<>"']/,Iu=new RegExp(Ol.source,"g"),zl=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Lu=new RegExp(zl.source,"g"),Mu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jl=e=>Mu[e];function Me(e,t){if(t){if(Ol.test(e))return e.replace(Iu,jl)}else if(zl.test(e))return e.replace(Lu,jl);return e}const Ou=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function zu(e){return e.replace(Ou,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const ju=/(^|[^\[])\^/g;function le(e,t){let n=typeof e=="string"?e:e.source;t=t||"";const i={replace:(r,s)=>{let l=typeof s=="string"?s:s.source;return l=l.replace(ju,"$1"),n=n.replace(r,l),i},getRegex:()=>new RegExp(n,t)};return i}function Pl(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const vn={exec:()=>null};function Fl(e,t){const n=e.replace(/\|/g,(s,l,o)=>{let a=!1,c=l;for(;--c>=0&&o[c]==="\\";)a=!a;return a?"|":" |"}),i=n.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function hi(e,t,n){const i=e.length;if(i===0)return"";let r=0;for(;r<i;){const s=e.charAt(i-r-1);if(s===t&&!n)r++;else if(s!==t&&n)r++;else break}return e.slice(0,i-r)}function Pu(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let i=0;i<e.length;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])n++;else if(e[i]===t[1]&&(n--,n<0))return i;return-1}function Ul(e,t,n,i){const r=t.href,s=t.title?Me(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){i.state.inLink=!0;const o={type:"link",raw:n,href:r,title:s,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,o}return{type:"image",raw:n,href:r,title:s,text:Me(l)}}function Fu(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const i=n[1];return t.split(`
                `).map(r =>{
                    const s = r.match(/^\s+/);
                    if (s === null) return r;
                    const[l] = s;
                    return l.length >= i.length ? r.slice(i.length) : r
                }).join(``)
            }
            class di {
                options;
                rules;
                lexer;
                constructor(t) {
                    this.options = t || Tt
                }
                space(t) {
                    const n = this.rules.block.newline.exec(t);
                    if (n && n[0].length > 0) return {
                        type: "space",
                        raw: n[0]
                    }
                }
                code(t) {
                    const n = this.rules.block.code.exec(t);
                    if (n) {
                        const i = n[0].replace(/^ {1,4}/gm, "");
                        return {
                            type: "code",
                            raw: n[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? i: hi(i, ``)
                        }
                    }
                }
                fences(t) {
                    const n = this.rules.block.fences.exec(t);
                    if (n) {
                        const i = n[0],
                        r = Fu(i, n[3] || "");
                        return {
                            type: "code",
                            raw: i,
                            lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
                            text: r
                        }
                    }
                }
                heading(t) {
                    const n = this.rules.block.heading.exec(t);
                    if (n) {
                        let i = n[2].trim();
                        if (/#$/.test(i)) {
                            const r = hi(i, "#"); (this.options.pedantic || !r || / $/.test(r)) && (i = r.trim())
                        }
                        return {
                            type: "heading",
                            raw: n[0],
                            depth: n[1].length,
                            text: i,
                            tokens: this.lexer.inline(i)
                        }
                    }
                }
                hr(t) {
                    const n = this.rules.block.hr.exec(t);
                    if (n) return {
                        type: "hr",
                        raw: n[0]
                    }
                }
                blockquote(t) {
                    const n = this.rules.block.blockquote.exec(t);
                    if (n) {
                        const i = hi(n[0].replace(/^ *>[ \t]?/gm, ""), ``),
                        r = this.lexer.state.top;
                        this.lexer.state.top = !0;
                        const s = this.lexer.blockTokens(i);
                        return this.lexer.state.top = r,
                        {
                            type: "blockquote",
                            raw: n[0],
                            tokens: s,
                            text: i
                        }
                    }
                }
                list(t) {
                    let n = this.rules.block.list.exec(t);
                    if (n) {
                        let i = n[1].trim();
                        const r = i.length > 1,
                        s = {
                            type: "list",
                            raw: "",
                            ordered: r,
                            start: r ? +i.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        };
                        i = r ? `\\d{1,9}\\${i.slice( - 1)}`: `\\${i}`,
                        this.options.pedantic && (i = r ? i: "[*+-]");
                        const l = new RegExp(`^({0,3}${i})(( ? :[][ ^ \\n] * ) ? ( ? :\\n | $))`);
                        let o = "",
                        a = "",
                        c = !1;
                        for (; t;) {
                            let f = !1;
                            if (! (n = l.exec(t)) || this.rules.block.hr.test(t)) break;
                            o = n[0],
                            t = t.substring(o.length);
                            let p = n[2].split(``, 1)[0].replace(/^\t+/, w =>" ".repeat(3 * w.length)),
                            d = t.split(``, 1)[0],
                            m = 0;
                            this.options.pedantic ? (m = 2, a = p.trimStart()) : (m = n[2].search(/[^ ]/), m = m > 4 ? 1 : m, a = p.slice(m), m += n[1].length);
                            let S = !1;
                            if (!p && /^ *$/.test(d) && (o += d + ``, t = t.substring(d.length + 1), f = !0), !f) {
                                const w = new RegExp(` ^{0,${Math.min(3, m - 1)}
                                } ( ? :[ * +-] | \\d {1,9} [.)])(( ? :[][ ^ \\n] * ) ? ( ? :\\n | $))`),
                                T = new RegExp(` ^ {
                                    0,
                                    ${
                                        Math.min(3, m - 1)
                                    }
                                } (( ? :-*) {
                                    3,
                                } | ( ? :_ * ) {
                                    3,
                                } | ( ? :\\ * *) {
                                    3,
                                })( ? :\\n + |$)`),
                                j = new RegExp(` ^ {
                                    0,
                                    ${
                                        Math.min(3, m - 1)
                                    }
                                } ( ? :\`\`\` | ~~~)`),
                                N = new RegExp(` ^ {
                                    0,
                                    ${
                                        Math.min(3, m - 1)
                                    }
                                }#`);
                                for (; t;) {
                                    const P = t.split(``, 1)[0];
                                    if (d = P, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), j.test(d) || N.test(d) || w.test(d) || T.test(t)) break;
                                    if (d.search(/[^ ]/) >= m || !d.trim()) a += `` + d.slice(m);
                                    else {
                                        if (S || p.search(/[^ ]/) >= 4 || j.test(p) || N.test(p) || T.test(p)) break;
                                        a += `` + d
                                    } ! S && !d.trim() && (S = !0),
                                    o += P + ``,
                                    t = t.substring(P.length + 1),
                                    p = d.slice(m)
                                }
                            }
                            s.loose || (c ? s.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
                            let x = null,
                            C;
                            this.options.gfm && (x = /^\[[ xX]\] /.exec(a), x && (C = x[0] !== "[ ] ", a = a.replace(/^\[[ xX]\] +/, ""))),
                            s.items.push({
                                type: "list_item",
                                raw: o,
                                task: !!x,
                                checked: C,
                                loose: !1,
                                text: a,
                                tokens: []
                            }),
                            s.raw += o
                        }
                        s.items[s.items.length - 1].raw = o.trimEnd(),
                        s.items[s.items.length - 1].text = a.trimEnd(),
                        s.raw = s.raw.trimEnd();
                        for (let f = 0; f < s.items.length; f++) if (this.lexer.state.top = !1, s.items[f].tokens = this.lexer.blockTokens(s.items[f].text, []), !s.loose) {
                            const p = s.items[f].tokens.filter(m =>m.type === "space"),
                            d = p.length > 0 && p.some(m =>/\n.*\n/.test(m.raw));
                            s.loose = d
                        }
                        if (s.loose) for (let f = 0; f < s.items.length; f++) s.items[f].loose = !0;
                        return s
                    }
                }
                html(t) {
                    const n = this.rules.block.html.exec(t);
                    if (n) return {
                        type: "html",
                        block: !0,
                        raw: n[0],
                        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
                        text: n[0]
                    }
                }
                def(t) {
                    const n = this.rules.block.def.exec(t);
                    if (n) {
                        const i = n[1].toLowerCase().replace(/\s+/g, " "),
                        r = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                        s = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
                        return {
                            type: "def",
                            tag: i,
                            raw: n[0],
                            href: r,
                            title: s
                        }
                    }
                }
                table(t) {
                    const n = this.rules.block.table.exec(t);
                    if (!n || !/[:|]/.test(n[2])) return;
                    const i = Fl(n[1]),
                    r = n[2].replace(/^\||\| *$/g, "").split("|"),
                    s = n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(``) : [],
                    l = {
                        type: "table",
                        raw: n[0],
                        header: [],
                        align: [],
                        rows: []
                    };
                    if (i.length === r.length) {
                        for (const o of r)/^ *-+: *$/.test(o) ? l.align.push("right") : /^ *:-+: *$/.test(o) ? l.align.push("center") : /^ *:-+ *$/.test(o) ? l.align.push("left") : l.align.push(null);
                        for (const o of i) l.header.push({
                            text: o,
                            tokens: this.lexer.inline(o)
                        });
                        for (const o of s) l.rows.push(Fl(o, l.header.length).map(a =>({
                            text: a,
                            tokens: this.lexer.inline(a)
                        })));
                        return l
                    }
                }
                lheading(t) {
                    const n = this.rules.block.lheading.exec(t);
                    if (n) return {
                        type: "heading",
                        raw: n[0],
                        depth: n[2].charAt(0) === "=" ? 1 : 2,
                        text: n[1],
                        tokens: this.lexer.inline(n[1])
                    }
                }
                paragraph(t) {
                    const n = this.rules.block.paragraph.exec(t);
                    if (n) {
                        const i = n[1].charAt(n[1].length - 1) === `` ? n[1].slice(0, -1) : n[1];
                        return {
                            type: "paragraph",
                            raw: n[0],
                            text: i,
                            tokens: this.lexer.inline(i)
                        }
                    }
                }
                text(t) {
                    const n = this.rules.block.text.exec(t);
                    if (n) return {
                        type: "text",
                        raw: n[0],
                        text: n[0],
                        tokens: this.lexer.inline(n[0])
                    }
                }
                escape(t) {
                    const n = this.rules.inline.escape.exec(t);
                    if (n) return {
                        type: "escape",
                        raw: n[0],
                        text: Me(n[1])
                    }
                }
                tag(t) {
                    const n = this.rules.inline.tag.exec(t);
                    if (n) return ! this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1),
                    {
                        type: "html",
                        raw: n[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: n[0]
                    }
                }
                link(t) {
                    const n = this.rules.inline.link.exec(t);
                    if (n) {
                        const i = n[2].trim();
                        if (!this.options.pedantic && /^</.test(i)) {
                            if (!/>$/.test(i)) return;
                            const l = hi(i.slice(0, -1), "\\");
                            if ((i.length - l.length) % 2 === 0) return
                        } else {
                            const l = Pu(n[2], "()");
                            if (l > -1) {
                                const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + l;
                                n[2] = n[2].substring(0, l),
                                n[0] = n[0].substring(0, a).trim(),
                                n[3] = ""
                            }
                        }
                        let r = n[2],
                        s = "";
                        if (this.options.pedantic) {
                            const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
                            l && (r = l[1], s = l[3])
                        } else s = n[3] ? n[3].slice(1, -1) : "";
                        return r = r.trim(),
                        /^</.test(r) && (this.options.pedantic && !/>$/.test(i) ? r = r.slice(1) : r = r.slice(1, -1)),
                        Ul(n, {
                            href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
                            title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
                        },
                        n[0], this.lexer)
                    }
                }
                reflink(t, n) {
                    let i;
                    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
                        const r = (i[2] || i[1]).replace(/\s+/g, " "),
                        s = n[r.toLowerCase()];
                        if (!s) {
                            const l = i[0].charAt(0);
                            return {
                                type: "text",
                                raw: l,
                                text: l
                            }
                        }
                        return Ul(i, s, i[0], this.lexer)
                    }
                }
                emStrong(t, n, i = "") {
                    let r = this.rules.inline.emStrongLDelim.exec(t);
                    if (!r || r[3] && i.match(/[\p{L}\p{N}]/u)) return;
                    if (! (r[1] || r[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
                        const l = [...r[0]].length - 1;
                        let o,
                        a,
                        c = l,
                        f = 0;
                        const p = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst: this.rules.inline.emStrongRDelimUnd;
                        for (p.lastIndex = 0, n = n.slice( - 1 * t.length + l); (r = p.exec(n)) != null;) {
                            if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o) continue;
                            if (a = [...o].length, r[3] || r[4]) {
                                c += a;
                                continue
                            } else if ((r[5] || r[6]) && l % 3 && !((l + a) % 3)) {
                                f += a;
                                continue
                            }
                            if (c -= a, c > 0) continue;
                            a = Math.min(a, a + c + f);
                            const d = [...r[0]][0].length,
                            m = t.slice(0, l + r.index + d + a);
                            if (Math.min(l, a) % 2) {
                                const x = m.slice(1, -1);
                                return {
                                    type: "em",
                                    raw: m,
                                    text: x,
                                    tokens: this.lexer.inlineTokens(x)
                                }
                            }
                            const S = m.slice(2, -2);
                            return {
                                type: "strong",
                                raw: m,
                                text: S,
                                tokens: this.lexer.inlineTokens(S)
                            }
                        }
                    }
                }
                codespan(t) {
                    const n = this.rules.inline.code.exec(t);
                    if (n) {
                        let i = n[2].replace(/\n/g, " ");
                        const r = /[^ ]/.test(i),
                        s = /^ /.test(i) && / $/.test(i);
                        return r && s && (i = i.substring(1, i.length - 1)),
                        i = Me(i, !0),
                        {
                            type: "codespan",
                            raw: n[0],
                            text: i
                        }
                    }
                }
                br(t) {
                    const n = this.rules.inline.br.exec(t);
                    if (n) return {
                        type: "br",
                        raw: n[0]
                    }
                }
                del(t) {
                    const n = this.rules.inline.del.exec(t);
                    if (n) return {
                        type: "del",
                        raw: n[0],
                        text: n[2],
                        tokens: this.lexer.inlineTokens(n[2])
                    }
                }
                autolink(t) {
                    const n = this.rules.inline.autolink.exec(t);
                    if (n) {
                        let i,
                        r;
                        return n[2] === "@" ? (i = Me(n[1]), r = "mailto:" + i) : (i = Me(n[1]), r = i),
                        {
                            type: "link",
                            raw: n[0],
                            text: i,
                            href: r,
                            tokens: [{
                                type: "text",
                                raw: i,
                                text: i
                            }]
                        }
                    }
                }
                url(t) {
                    var i;
                    let n;
                    if (n = this.rules.inline.url.exec(t)) {
                        let r,
                        s;
                        if (n[2] === "@") r = Me(n[0]),
                        s = "mailto:" + r;
                        else {
                            let l;
                            do l = n[0],
                            n[0] = ((i = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : i[0]) ??"";
                            while (l !== n[0]);
                            r = Me(n[0]),
                            n[1] === "www." ? s = "http://" + n[0] : s = n[0]
                        }
                        return {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: s,
                            tokens: [{
                                type: "text",
                                raw: r,
                                text: r
                            }]
                        }
                    }
                }
                inlineText(t) {
                    const n = this.rules.inline.text.exec(t);
                    if (n) {
                        let i;
                        return this.lexer.state.inRawBlock ? i = n[0] : i = Me(n[0]),
                        {
                            type: "text",
                            raw: n[0],
                            text: i
                        }
                    }
                }
            }
            const Uu = /^(?: *(?:\n|$))+/,
            Nu = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            Hu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            yn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            Du = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            Nl = /(?:[*+-]|\d{1,9}[.)])/,
            Hl = le(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Nl).getRegex(),
            mr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            Vu = /^[^\n]+/,
            vr = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
            Bu = le(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", vr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
            Wu = le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Nl).getRegex(),
            pi = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
            yr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
            qu = le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", yr).replace("tag", pi).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
            Dl = le(mr).replace("hr", yn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pi).getRegex(),
            Ku = le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Dl).getRegex(),
            wr = {
                blockquote: Ku,
                code: Nu,
                def: Bu,
                fences: Hu,
                heading: Du,
                hr: yn,
                html: qu,
                lheading: Hl,
                list: Wu,
                newline: Uu,
                paragraph: Dl,
                table: vn,
                text: Vu
            },
            Vl = le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", yn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pi).getRegex(),
            Zu = {...wr,
                table: Vl,
                paragraph: le(mr).replace("hr", yn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Vl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pi).getRegex()
            },
            Gu = {...wr,
                html: le(` ^ *( ? :comment * ( ? :\\n | \\s * $) | <(tag)[\\s\\S] + ?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/ > \\s] * ) * ?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",yr).replace(/tag /g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: vn,
                lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                paragraph: le(mr).replace("hr", yn).replace("heading", ` * # {
                    1,
                    6
                } * [ ^ ]`).replace("lheading", Hl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
            },
            Bl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            Qu=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            Wl=/^( {2,}|\\)\n(?!\s*$)/,
            Ju=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            wn="\\p{P}\\p{S}",
            Yu=le(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,wn).getRegex(),
            Xu=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
            ef=le(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,wn).getRegex(),
            tf=le("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,wn).getRegex(),
            nf=le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,wn).getRegex(),
            rf=le(/\\([punct])/,"gu").replace(/punct/g,wn).getRegex(),
            sf=le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
            lf=le(yr).replace("(?:-->|$)","-->").getRegex(),
            of=le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",lf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
            gi=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
            af=le(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",gi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
            ql=le(/^!?\[(label)\]\[(ref)\]/).replace("label",gi).replace("ref",vr).getRegex(),
            Kl=le(/^!?\[(ref)\](?:\[\])?/).replace("ref",vr).getRegex(), 
            cf=le("reflink|nolink(?!\\()","g").replace("reflink",ql).replace("nolink",Kl).getRegex(),
    br = {
                _backpedal: vn,
                anyPunctuation: rf,
                autolink: sf,
                blockSkip: Xu,
                br: Wl,
                code: Qu,
                del: vn,
                emStrongLDelim: ef,
                emStrongRDelimAst: tf,
                emStrongRDelimUnd: nf,
                escape: Bl,
                link: af,
                nolink: Kl,
                punctuation: Yu,
                reflink: ql,
                reflinkSearch: cf,
                tag: of,
                text: Ju,
                url: vn
            },
            uf = {...br,
                link: le(/^!?\[(label)\]\((.*?)\)/).replace("label", gi).getRegex(),
                reflink: le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", gi).getRegex()
            },
            kr = {...br,
                escape: le(Bl).replace("])", "~|])").getRegex(),
                url: le(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
                _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
            },
            ff = {...kr,
                br: le(Wl).replace("{2,}", "*").getRegex(),
                text: le(kr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            },
            mi = {
                normal: wr,
                gfm: Zu,
                pedantic: Gu
            },
            bn = {
                normal: br,
                gfm: kr,
                breaks: ff,
                pedantic: uf
            };class nt {
                tokens;
                options;
                state;
                tokenizer;
                inlineQueue;
                constructor(t) {
                    this.tokens = [],
                    this.tokens.links = Object.create(null),
                    this.options = t || Tt,
                    this.options.tokenizer = this.options.tokenizer || new di,
                    this.tokenizer = this.options.tokenizer,
                    this.tokenizer.options = this.options,
                    this.tokenizer.lexer = this,
                    this.inlineQueue = [],
                    this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                    const n = {
                        block: mi.normal,
                        inline: bn.normal
                    };
                    this.options.pedantic ? (n.block = mi.pedantic, n.inline = bn.pedantic) : this.options.gfm && (n.block = mi.gfm, this.options.breaks ? n.inline = bn.breaks: n.inline = bn.gfm),
                    this.tokenizer.rules = n
                }
                static get rules() {
                    return {
                        block: mi,
                        inline: bn
                    }
                }
                static lex(t, n) {
                    return new nt(n).lex(t)
                }
                static lexInline(t, n) {
                    return new nt(n).inlineTokens(t)
                }
                lex(t) {
                    t = t.replace(/\r\n|\r/g, ``),
                    this.blockTokens(t, this.tokens);
                    for (let n = 0; n < this.inlineQueue.length; n++) {
                        const i = this.inlineQueue[n];
                        this.inlineTokens(i.src, i.tokens)
                    }
                    return this.inlineQueue = [],
                    this.tokens
                }
                blockTokens(t, n = []) {
                    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (o, a, c) =>a + "    ".repeat(c.length));
                    let i,
                    r,
                    s,
                    l;
                    for (; t;) if (! (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(o =>(i = o.call({
                        lexer: this
                    },
                    t, n)) ? (t = t.substring(i.raw.length), n.push(i), !0) : !1))) {
                        if (i = this.tokenizer.space(t)) {
                            t = t.substring(i.raw.length),
                            i.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += ``: n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.code(t)) {
                            t = t.substring(i.raw.length),
                            r = n[n.length - 1],
                            r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `` + i.raw, r.text += `` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.fences(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.heading(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.hr(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.blockquote(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.list(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.html(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.def(t)) {
                            t = t.substring(i.raw.length),
                            r = n[n.length - 1],
                            r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `` + i.raw, r.text += `` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
                                href: i.href,
                                title: i.title
                            });
                            continue
                        }
                        if (i = this.tokenizer.table(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.lheading(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (s = t, this.options.extensions && this.options.extensions.startBlock) {
                            let o = 1 / 0;
                            const a = t.slice(1);
                            let c;
                            this.options.extensions.startBlock.forEach(f =>{
                                c = f.call({
                                    lexer: this
                                },
                                a),
                                typeof c == "number" && c >= 0 && (o = Math.min(o, c))
                            }),
                            o < 1 / 0 && o >= 0 && (s = t.substring(0, o + 1))
                        }
                        if (this.state.top && (i = this.tokenizer.paragraph(s))) {
                            r = n[n.length - 1],
                            l && r.type === "paragraph" ? (r.raw += `` + i.raw, r.text += `` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : n.push(i),
                            l = s.length !== t.length,
                            t = t.substring(i.raw.length);
                            continue
                        }
                        if (i = this.tokenizer.text(t)) {
                            t = t.substring(i.raw.length),
                            r = n[n.length - 1],
                            r && r.type === "text" ? (r.raw += `` + i.raw, r.text += `` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : n.push(i);
                            continue
                        }
                        if (t) {
                            const o = "Infinite loop on byte: " + t.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(o);
                                break
                            } else throw new Error(o)
                        }
                    }
                    return this.state.top = !0,
                    n
                }
                inline(t, n = []) {
                    return this.inlineQueue.push({
                        src: t,
                        tokens: n
                    }),
                    n
                }
                inlineTokens(t, n = []) {
                    let i,
                    r,
                    s,
                    l = t,
                    o,
                    a,
                    c;
                    if (this.tokens.links) {
                        const f = Object.keys(this.tokens.links);
                        if (f.length > 0) for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null;) f.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                    }
                    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null;) l = l.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null;) l = l.slice(0, o.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                    for (; t;) if (a || (c = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(f =>(i = f.call({
                        lexer: this
                    },
                    t, n)) ? (t = t.substring(i.raw.length), n.push(i), !0) : !1))) {
                        if (i = this.tokenizer.escape(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.tag(t)) {
                            t = t.substring(i.raw.length),
                            r = n[n.length - 1],
                            r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.link(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.reflink(t, this.tokens.links)) {
                            t = t.substring(i.raw.length),
                            r = n[n.length - 1],
                            r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.emStrong(t, l, c)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.codespan(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.br(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.del(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (i = this.tokenizer.autolink(t)) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (!this.state.inLink && (i = this.tokenizer.url(t))) {
                            t = t.substring(i.raw.length),
                            n.push(i);
                            continue
                        }
                        if (s = t, this.options.extensions && this.options.extensions.startInline) {
                            let f = 1 / 0;
                            const p = t.slice(1);
                            let d;
                            this.options.extensions.startInline.forEach(m =>{
                                d = m.call({
                                    lexer: this
                                },
                                p),
                                typeof d == "number" && d >= 0 && (f = Math.min(f, d))
                            }),
                            f < 1 / 0 && f >= 0 && (s = t.substring(0, f + 1))
                        }
                        if (i = this.tokenizer.inlineText(s)) {
                            t = t.substring(i.raw.length),
                            i.raw.slice( - 1) !== "_" && (c = i.raw.slice( - 1)),
                            a = !0,
                            r = n[n.length - 1],
                            r && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : n.push(i);
                            continue
                        }
                        if (t) {
                            const f = "Infinite loop on byte: " + t.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(f);
                                break
                            } else throw new Error(f)
                        }
                    }
                    return n
                }
            }
            class vi {
                options;
                constructor(t) {
                    this.options = t || Tt
                }
                code(t, n, i) {
                    var s;
                    const r = (s = (n || "").match(/^\S*/)) == null ? void 0 : s[0];
                    return t = t.replace(/\n$/, "") + ``,
                    r ? '<pre><code class="language-' + Me(r) + '">' + (i ? t: Me(t, !0)) + ` < /code></pre > `: "<pre><code>" + (i ? t: Me(t, !0)) + ` < /code></pre > `
                }
                blockquote(t) {
                    return` < blockquote > $ {t} < /blockquote>`}html(t,n){return t}heading(t,n,i){return`<h${n}>${t}</h$ {n} > `
                }
                hr() {
                    return` < hr > `
                }
                list(t, n, i) {
                    const r = n ? "ol": "ul",
                    s = n && i !== 1 ? ' start="' + i + '"': "";
                    return "<" + r + s + ` > ` + t + "</" + r + ` > `
                }
                listitem(t, n, i) {
                    return` <li> $ { t } </li>`}
                    checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p > `
                }
                table(t, n) {
                    return n && (n = ` <tbody> $ { n } </tbody>`),`<table><thead>`+t+`</thead > ` + n + ` < /table>`}tablerow(t){return`<tr>${t}</tr > `
                }
                tablecell(t, n) {
                    const i = n.header ? "th": "td";
                    return (n.align ? ` < $ { i } align = "${n.align}" > `: ` < $ { i } > `) + t + ` < /${i}>`}strong(t){return`<strong>${t}</strong > `
                }
                em(t) {
                    return` <em> $ { t } < /em>`}codespan(t){return`<code>${t}</code > `
                }
                br() {
                    return "<br>"
                }
                del(t) {
                    return`<del>${t}</del>`}link(t,n,i){const r=Pl(t);if(r===null)return i;t=r;let s='<a href="'+t+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image(t,n,i){const r=Pl(t);if(r===null)return i;t=r;let s=`<img src="${t}" alt="${i}"`;return n&&(s+=` title="${n}"`),s+=">",s}text(t){return t}}class xr{strong(t){return t}em(t){return t}codespan(t){return t}
                    
                del(t)
            {return t}html(t){return t}text(t){return t}link(t,n,i){return""+i}image(t,n,i){return""+i}br(){return""}}class it{options;renderer;textRenderer;constructor(t){this.options=t||Tt,this.options.renderer=this.options.renderer||new vi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new xr}static parse(t,n){return new it(n).parse(t)}static parseInline(t,n){return new it(n).parseInline(t)}parse(t,n=!0){let i="";for(let r=0;r<t.length;r++){const s=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const l=s,o=this.options.extensions.renderers[l.type].call({parser:this},l);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){i+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{const l=s;i+=this.renderer.heading(this.parseInline(l.tokens),l.depth,zu(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=s;i+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=s;let o="",a="";for(let f=0;f<l.header.length;f++)a+=this.renderer.tablecell(this.parseInline(l.header[f].tokens),{header:!0,align:l.align[f]});o+=this.renderer.tablerow(a);let c="";for(let f=0;f<l.rows.length;f++){const p=l.rows[f];a="";for(let d=0;d<p.length;d++)a+=this.renderer.tablecell(this.parseInline(p[d].tokens),{header:!1,align:l.align[d]});c+=this.renderer.tablerow(a)}i+=this.renderer.table(o,c);continue}case"blockquote":{const l=s,o=this.parse(l.tokens);i+=this.renderer.blockquote(o);continue}case"list":{const l=s,o=l.ordered,a=l.start,c=l.loose;let f="";for(let p=0;p<l.items.length;p++){const d=l.items[p],m=d.checked,S=d.task;let x="";if(d.task){const C=this.renderer.checkbox(!!m);c?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=C+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=C+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:C+" "}):x+=C+" "}x+=this.parse(d.tokens,c),f+=this.renderer.listitem(x,S,!!m)}i+=this.renderer.list(f,o,a);continue}case"html":{const l=s;i+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=s;i+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=s,o=l.tokens?this.parseInline(l.tokens):l.text;for(;r+1<t.length&&t[r+1].type==="text";)l=t[++r],o+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);i+=n?this.renderer.paragraph(o):o;continue}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}parseInline(t,n){n=n||this.renderer;let i="";for(let r=0;r<t.length;r++){const s=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=l||"";continue}}switch(s.type){case"escape":{const l=s;i+=n.text(l.text);break}case"html":{const l=s;i+=n.html(l.text);break}case"link":{const l=s;i+=n.link(l.href,l.title,this.parseInline(l.tokens,n));break}case"image":{const l=s;i+=n.image(l.href,l.title,l.text);break}case"strong":{const l=s;i+=n.strong(this.parseInline(l.tokens,n));break}case"em":{const l=s;i+=n.em(this.parseInline(l.tokens,n));break}case"codespan":{const l=s;i+=n.codespan(l.text);break}case"br":{i+=n.br();break}case"del":{const l=s;i+=n.del(this.parseInline(l.tokens,n));break}case"text":{const l=s;i+=n.text(l.text);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}}class kn{options;constructor(t){this.options=t||Tt}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}}je(kn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Zl{constructor(...t){_i(this,Tn);_i(this,bi);je(this,"defaults",gr());je(this,"options",this.setOptions);je(this,"parse",Rn(this,Tn,Cr).call(this,nt.lex,it.parse));je(this,"parseInline",Rn(this,Tn,Cr).call(this,nt.lexInline,it.parseInline));je(this,"Parser",it);je(this,"Renderer",vi);je(this,"TextRenderer",xr);je(this,"Lexer",nt);je(this,"Tokenizer",di);je(this,"Hooks",kn);this.use(...t)}walkTokens(t,n){var r,s;let i=[];for(const l of t)switch(i=i.concat(n.call(this,l)),l.type){case"table":{const o=l;for(const a of o.header)i=i.concat(this.walkTokens(a.tokens,n));for(const a of o.rows)for(const c of a)i=i.concat(this.walkTokens(c.tokens,n));break}case"list":{const o=l;i=i.concat(this.walkTokens(o.items,n));break}default:{const o=l;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{const c=o[a].flat(1/0);i=i.concat(this.walkTokens(c,n))}):o.tokens&&(i=i.concat(this.walkTokens(o.tokens,n)))}}return i}use(...t){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const l=n.renderers[s.name];l?n.renderers[s.name]=function(...o){let a=s.renderer.apply(this,o);return a===!1&&(a=l.apply(this,o)),a}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=n[s.level];l?l.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),r.extensions=n),i.renderer){const s=this.defaults.renderer||new vi(this.defaults);for(const l in i.renderer){if(!(l in s))throw new Error(`renderer '${l}' does not exist`);if(l==="options")continue;const o=l,a=i.renderer[o],c=s[o];s[o]=(...f)=>{let p=a.apply(s,f);return p===!1&&(p=c.apply(s,f)),p||""}}r.renderer=s}if(i.tokenizer){const s=this.defaults.tokenizer||new di(this.defaults);for(const l in i.tokenizer){if(!(l in s))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const o=l,a=i.tokenizer[o],c=s[o];s[o]=(...f)=>{let p=a.apply(s,f);return p===!1&&(p=c.apply(s,f)),p}}r.tokenizer=s}if(i.hooks){const s=this.defaults.hooks||new kn;for(const l in i.hooks){if(!(l in s))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const o=l,a=i.hooks[o],c=s[o];kn.passThroughHooks.has(l)?s[o]=f=>{if(this.defaults.async)return Promise.resolve(a.call(s,f)).then(d=>c.call(s,d));const p=a.call(s,f);return c.call(s,p)}:s[o]=(...f)=>{let p=a.apply(s,f);return p===!1&&(p=c.apply(s,f)),p}}r.hooks=s}if(i.walkTokens){const s=this.defaults.walkTokens,l=i.walkTokens;r.walkTokens=function(o){let a=[];return a.push(l.call(this,o)),s&&(a=a.concat(s.call(this,o))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,n){return nt.lex(t,n??this.defaults)}parser(t,n){return it.parse(t,n??this.defaults)}}Tn=new WeakSet,Cr=function(t,n){return(i,r)=>{const s={...r},l={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const o=Rn(this,bi,vo).call(this,!!l.silent,!!l.async);if(typeof i>"u"||i===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(i):i).then(a=>t(a,l)).then(a=>l.hooks?l.hooks.processAllTokens(a):a).then(a=>l.walkTokens?Promise.all(this.walkTokens(a,l.walkTokens)).then(()=>a):a).then(a=>n(a,l)).then(a=>l.hooks?l.hooks.postprocess(a):a).catch(o);try{l.hooks&&(i=l.hooks.preprocess(i));let a=t(i,l);l.hooks&&(a=l.hooks.processAllTokens(a)),l.walkTokens&&this.walkTokens(a,l.walkTokens);let c=n(a,l);return l.hooks&&(c=l.hooks.postprocess(c)),c}catch(a){return o(a)}}},bi=new WeakSet,vo=function(t,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+Me(i.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(i);throw i}};const Rt=new Zl;function he(e,t){return Rt.parse(e,t)}he.options=he.setOptions=function(e){return Rt.setOptions(e),he.defaults=Rt.defaults,Ml(he.defaults),he},he.getDefaults=gr,he.defaults=Tt,he.use=function(...e){return Rt.use(...e),he.defaults=Rt.defaults,Ml(he.defaults),he},he.walkTokens=function(e,t){return Rt.walkTokens(e,t)},he.parseInline=Rt.parseInline,he.Parser=it,he.parser=it.parse,he.Renderer=vi,he.TextRenderer=xr,he.Lexer=nt,he.lexer=nt.lex,he.Tokenizer=di,he.Hooks=kn,he.parse=he;function hf(e){if(typeof e=="function"&&(e={highlight:e}),!e||typeof e.highlight!="function")throw new Error("Must provide highlight function");return typeof e.langPrefix!="string"&&(e.langPrefix="language-"),{async:!!e.async,walkTokens(t){if(t.type!=="code")return;const n=Gl(t.lang);if(e.async)return Promise.resolve(e.highlight(t.text,n,t.lang||"")).then(Ql(t));const i=e.highlight(t.text,n,t.lang||"");if(i instanceof Promise)throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");Ql(t)(i)},renderer:{code(t,n,i){const r=Gl(n),s=r?` class="${e.langPrefix}${eo(r)}"`:"";return t=t.replace(/\n$/,""),`<pre><code${s}>${i?t:eo(t,!0)}
</code></pre>`}}}}function Gl(e){return(e||"").match(/\S*/)[0]}function Ql(e){return t=>{typeof t=="string"&&t!==e.text&&(e.escaped=!0,e.text=t)}}
                    const Jl=/[&<>"']/,
                    df=new RegExp(Jl.source,"g"),
                    Yl=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
                    pf = new RegExp(Yl.source, "g"),
                    gf = {"&": "&amp;",
                        "<": "&lt;", 
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    Xl = e =>gf[e];
                    function eo(e, t) {
                        if (t) {
                            if (Jl.test(e)) return e.replace(df, Xl)
                        } else if (Yl.test(e)) return e.replace(pf, Xl);
                        return e
                    }
                    const mf = /\$.*?\$/,
                    vf = /^\$(.*?)\$/,
                    yf = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
                    wf = e =>[{
                        name: "blockMath",
                        level: "block",
                        tokenizer(t) {
                            const n = yf.exec(t);
                            if (n !== null) return {
                                type: "html",
                                raw: n[0],
                                text: e(!0, n[1])
                            }
                        }
                    },
                    {
                        name: "inlineMath",
                        level: "inline",
                        start(t) {
                            const n = t.search(mf);
                            return n !== -1 ? n: t.length
                        },
                        tokenizer(t) {
                            const n = vf.exec(t);
                            if (n !== null) return {
                                type: "html",
                                raw: n[0],
                                text: e(!1, n[1])
                            }
                        }
                    }],
                    to = (e = "", t = {}) =>e.replace(/:(.+?):/g, (n, i) =>t[i] ? ` < img class = "wl-emoji"src = "${t[i]}"alt = "${i}" > `: n),
                    bf = (e, {
                        emojiMap: t,
                        highlighter: n,
                        texRenderer: i
                    }) =>{
                        const r = new Zl;
                        if (r.setOptions({
                            breaks: !0
                        }), n && r.use(hf({
                            highlight: n
                        })), i) {
                            const s = wf(i);
                            r.use({
                                extensions: s
                            })
                        }
                        return r.parse(to(e, t))
                    },
                    _r = e =>e.dataset.path || null,
                    kf = e =>e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu),
                    xf = e =>e.match(/[\u4E00-\u9FD5]/gu),
                    _f = e =>{
                        var t, n;
                        return (((t = kf(e)) == null ? void 0 : t.reduce((i, r) =>i + (["", ",", "."].includes(r.trim()) ? 0 : r.trim().split(/\s+/u).length), 0)) || 0) + (((n = xf(e)) == null ? void 0 : n.length) || 0)
                    },
                    Cf = async() =>{
                        if (!navigator) return "";
                        const {
                            userAgentData: e
                        } = navigator;
                        let t = navigator.userAgent;
                        if (!e || e.platform !== "Windows") return t;
                        const {
                            platformVersion: n
                        } = await e.getHighEntropyValues(["platformVersion"]);
                        return n && parseInt(n.split(".")[0]) >= 13 && (t = t.replace("Windows NT 10.0", "Windows NT 11.0")),
                        t
                    },
                    no = ({
                        serverURL: e,
                        path: t = window.location.pathname,
                        selector: n = ".waline-comment-count",
                        lang: i = navigator.language
                    }) =>{
                        const r = new AbortController,
                        s = document.querySelectorAll(n);
                        return s.length && Lr({
                            serverURL: In(e),
                            paths: Array.from(s).map(l =>Gr(_r(l) || t)),
                            lang: i,
                            signal: r.signal
                        }).then(l =>{
                            s.forEach((o, a) =>{
                                o.innerText = l[a].toString()
                            })
                        }).
                        catch(Il),
                        r.abort.bind(r)
                    },
                    io = ({
                        size: e
                    }) =>ee("svg", {
                        class: "wl-close-icon",
                        viewBox: "0 0 1024 1024",
                        width: e,
                        height: e
                    },
                    [ee("path", {
                        d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
                        fill: "currentColor"
                    }), ee("path", {
                        d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
                        fill: "#888"
                    })]),
                    $f = () =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    ee("path", {
                        d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
                        fill: "red"
                    })),
                    Ef = () =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    ee("path", {
                        d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
                        fill: "currentColor"
                    })),
                    Tf = () =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    [ee("path", {
                        d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
                        fill: "currentColor"
                    }), ee("path", {
                        d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
                        fill: "currentColor"
                    })]),
                    Rf = ({
                        active: e = !1
                    }) =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    [ee("path", {
                        d: `M850.654 323.804c - 11.042 - 25.625 - 26.862 - 48.532 - 46.885 - 68.225 - 20.022 - 19.61 - 43.258 - 34.936 - 69.213 - 45.73 - 26.78 - 11.124 - 55.124 - 16.727 - 84.375 - 16.727 - 40.622 0 - 80.256 11.123 - 114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0 - 23.483 - 16.562c - 34.442 - 21.012 - 74.076 - 32.135 - 114.698 - 32.135 - 29.25 0 - 57.595 5.603 - 84.375 16.727 - 25.872 10.711 - 49.19 26.12 - 69.213 45.73 - 20.105 19.693 - 35.843 42.6 - 46.885 68.225 - 11.453 26.615 - 17.303 54.877 - 17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529 - 12.525c3.213 - 2.06 78.854 - 50.756 155.401 - 121.371 46.143 - 42.6 83.304 - 84.622 110.33 - 124.915 17.057 - 25.46 30.487 - 50.674 39.716 - 74.981 11.124 - 29.087 16.727 - 57.678 16.727 - 85.117.082 - 29.086 - 5.768 - 57.348 - 17.221 - 83.963z$ {
                            e ? "": "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"
                        }`,
                        fill: e ? "red": "currentColor"
                    })]),
                    Sf = () =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    [ee("path", {
                        d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
                        fill: "currentColor"
                    }), ee("path", {
                        d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
                        fill: "currentColor"
                    })]),
                    Af = () =>ee("svg", {
                        width: "16",
                        height: "16",
                        ariaHidden: "true"
                    },
                    ee("path", {
                        d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
                        fill: "currentColor"
                    })),
                    If = () =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    ee("path", {
                        d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
                        fill: "currentColor"
                    })),
                    Lf = () =>ee("svg", {
                        viewBox: "0 0 1024 1024",
                        width: "24",
                        height: "24"
                    },
                    ee("path", {
                        d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
                        fill: "currentColor"
                    })),
                    Mf = () =>ee("svg", {
                        class: "verified-icon",
                        viewBox: "0 0 1024 1024",
                        width: "14",
                        height: "14"
                    },
                    ee("path", {
                        d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
                        fill: "#27ae60"
                    })),
                    xn = ({
                        size: e = 100
                    }) =>ee("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        preserveAspectRatio: "xMidYMid"
                    },
                    ee("circle", {
                        cx: 50,
                        cy: 50,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        r: "40",
                        "stroke-dasharray": "85 30"
                    },
                    ee("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        repeatCount: "indefinite",
                        dur: "1s",
                        values: "0 50 50;360 50 50",
                        keyTimes: "0;1"
                    }))),
                    Of = () =>ee("svg", {
                        width: 24,
                        height: 24,
                        fill: "currentcolor",
                        viewBox: "0 0 24 24"
                    },
                    [ee("path", {
                        style: "transform: translateY(0.5px)",
                        d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"
                    }), ee("path", {
                        d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"
                    })]),
                    zf = () =>Vt("WALINE_USER_META", {
                        nick: "",
                        mail: "",
                        link: ""
                    }),
                    jf = () =>Vt("WALINE_COMMENT_BOX_EDITOR", ""),
                    Pf = "WALINE_LIKE";
                    let ro = null;
                    const so = () =>ro || (ro = Vt(Pf, [])),
                    Ff = "WALINE_REACTION";
                    let lo = null;
                    const Uf = () =>lo ??(lo = Vt(Ff, {}));
                    var yi = typeof globalThis < "u" ? globalThis: typeof window < "u" ? window: typeof global < "u" ? global: typeof self < "u" ? self: {},
                    oo = {},
                    Bt = {},
                    _n = {},
                    Nf = yi && yi.__awaiter ||
                    function(e, t, n, i) {
                        function r(s) {
                            return s instanceof n ? s: new n(function(l) {
                                l(s)
                            })
                        }
                        return new(n || (n = Promise))(function(s, l) {
                            function o(f) {
                                try {
                                    c(i.next(f))
                                } catch(p) {
                                    l(p)
                                }
                            }
                            function a(f) {
                                try {
                                    c(i.
                                    throw (f))
                                } catch(p) {
                                    l(p)
                                }
                            }
                            function c(f) {
                                f.done ? s(f.value) : r(f.value).then(o, a)
                            }
                            c((i = i.apply(e, t || [])).next())
                        })
                    },
                    Hf = yi && yi.__generator ||
                    function(e, t) {
                        var n = {
                            label: 0,
                            sent: function() {
                                if (s[0] & 1) throw s[1];
                                return s[1]
                            },
                            trys: [],
                            ops: []
                        },
                        i,
                        r,
                        s,
                        l;
                        return l = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        },
                        typeof Symbol == "function" && (l[Symbol.iterator] = function() {
                            return this
                        }),
                        l;
                        function o(c) {
                            return function(f) {
                                return a([c, f])
                            }
                        }
                        function a(c) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; n;) try {
                                if (i = 1, r && (s = c[0] & 2 ? r.
                                return: c[0] ? r.
                                throw || ((s = r.
                                return) && s.call(r), 0) : r.next) && !(s = s.call(r, c[1])).done) return s;
                                switch (r = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
                                case 0:
                                case 1:
                                    s = c;
                                    break;
                                case 4:
                                    return n.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    n.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = n.ops.pop(),
                                    n.trys.pop();
                                    continue;
                                default:
                                    if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                                        n = 0;
                                        continue
                                    }
                                    if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
                                        n.label = c[1];
                                        break
                                    }
                                    if (c[0] === 6 && n.label < s[1]) {
                                        n.label = s[1],
                                        s = c;
                                        break
                                    }
                                    if (s && n.label < s[2]) {
                                        n.label = s[2],
                                        n.ops.push(c);
                                        break
                                    }
                                    s[2] && n.ops.pop(),
                                    n.trys.pop();
                                    continue
                                }
                                c = t.call(e, n)
                            } catch(f) {
                                c = [6, f],
                                r = 0
                            } finally {
                                i = s = 0
                            }
                            if (c[0] & 5) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }
                    };
                    Object.defineProperty(_n, "__esModule", {
                        value: !0
                    }),
                    _n.ReCaptchaInstance = void 0;
                    var Df = function() {
                        function e(t, n, i) {
                            this.siteKey = t,
                            this.recaptchaID = n,
                            this.recaptcha = i,
                            this.styleContainer = null
                        }
                        return e.prototype.execute = function(t) {
                            return Nf(this, void 0, void 0,
                            function() {
                                return Hf(this,
                                function(n) {
                                    return [2, this.recaptcha.enterprise ? this.recaptcha.enterprise.execute(this.recaptchaID, {
                                        action: t
                                    }) : this.recaptcha.execute(this.recaptchaID, {
                                        action: t
                                    })]
                                })
                            })
                        },
                        e.prototype.getSiteKey = function() {
                            return this.siteKey
                        },
                        e.prototype.hideBadge = function() {
                            this.styleContainer === null && (this.styleContainer = document.createElement("style"), this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}", document.head.appendChild(this.styleContainer))
                        },
                        e.prototype.showBadge = function() {
                            this.styleContainer !== null && (document.head.removeChild(this.styleContainer), this.styleContainer = null)
                        },
                        e
                    } ();
                    _n.ReCaptchaInstance = Df,
                    Object.defineProperty(Bt, "__esModule", {
                        value: !0
                    }),
                    Bt.getInstance = Bt.load = void 0;
                    var Vf = _n,
                    gt; (function(e) {
                        e[e.NOT_LOADED = 0] = "NOT_LOADED",
                        e[e.LOADING = 1] = "LOADING",
                        e[e.LOADED = 2] = "LOADED"
                    })(gt || (gt = {}));
                    var ao = function() {
                        function e() {}
                        return e.load = function(t, n) {
                            if (n === void 0 && (n = {}), typeof document > "u") return Promise.reject(new Error("This is a library for the browser!"));
                            if (e.getLoadingState() === gt.LOADED) return e.instance.getSiteKey() === t ? Promise.resolve(e.instance) : Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
                            if (e.getLoadingState() === gt.LOADING) return t !== e.instanceSiteKey ? Promise.reject(new Error("reCAPTCHA already loaded with different site key!")) : new Promise(function(r, s) {
                                e.successfulLoadingConsumers.push(function(l) {
                                    return r(l)
                                }),
                                e.errorLoadingRunnable.push(function(l) {
                                    return s(l)
                                })
                            });
                            e.instanceSiteKey = t,
                            e.setLoadingState(gt.LOADING);
                            var i = new e;
                            return new Promise(function(r, s) {
                                i.loadScript(t, n.useRecaptchaNet || !1, n.useEnterprise || !1, n.renderParameters ? n.renderParameters: {},
                                n.customUrl).then(function() {
                                    e.setLoadingState(gt.LOADED);
                                    var l = i.doExplicitRender(grecaptcha, t, n.explicitRenderParameters ? n.explicitRenderParameters: {},
                                    n.useEnterprise || !1),
                                    o = new Vf.ReCaptchaInstance(t, l, grecaptcha);
                                    e.successfulLoadingConsumers.forEach(function(a) {
                                        return a(o)
                                    }),
                                    e.successfulLoadingConsumers = [],
                                    n.autoHideBadge && o.hideBadge(),
                                    e.instance = o,
                                    r(o)
                                }).
                                catch(function(l) {
                                    e.errorLoadingRunnable.forEach(function(o) {
                                        return o(l)
                                    }),
                                    e.errorLoadingRunnable = [],
                                    s(l)
                                })
                            })
                        },
                        e.getInstance = function() {
                            return e.instance
                        },
                        e.setLoadingState = function(t) {
                            e.loadingState = t
                        },
                        e.getLoadingState = function() {
                            return e.loadingState === null ? gt.NOT_LOADED: e.loadingState
                        },
                        e.prototype.loadScript = function(t, n, i, r, s) {
                            var l = this;
                            n === void 0 && (n = !1),
                            i === void 0 && (i = !1),
                            r === void 0 && (r = {}),
                            s === void 0 && (s = "");
                            var o = document.createElement("script");
                            o.setAttribute("recaptcha-v3-script", "");
                            var a = "https://www.google.com/recaptcha/api.js";
                            n && (i ? a = "https://recaptcha.net/recaptcha/enterprise.js": a = "https://recaptcha.net/recaptcha/api.js"),
                            i && (a = "https://www.google.com/recaptcha/enterprise.js"),
                            s && (a = s),
                            r.render && (r.render = void 0);
                            var c = this.buildQueryString(r);
                            return o.src = a + "?render=explicit" + c,
                            new Promise(function(f, p) {
                                o.addEventListener("load", l.waitForScriptToLoad(function() {
                                    f(o)
                                },
                                i), !1),
                                o.onerror = function(d) {
                                    e.setLoadingState(gt.NOT_LOADED),
                                    p(d)
                                },
                                document.head.appendChild(o)
                            })
                        },
                        e.prototype.buildQueryString = function(t) {
                            var n = Object.keys(t);
                            return n.length < 1 ? "": "&" + Object.keys(t).filter(function(i) {
                                return !! t[i]
                            }).map(function(i) {
                                return i + "=" + t[i]
                            }).join("&")
                        },
                        e.prototype.waitForScriptToLoad = function(t, n) {
                            var i = this;
                            return function() {
                                window.grecaptcha === void 0 ? setTimeout(function() {
                                    i.waitForScriptToLoad(t, n)
                                },
                                e.SCRIPT_LOAD_DELAY) : n ? window.grecaptcha.enterprise.ready(function() {
                                    t()
                                }) : window.grecaptcha.ready(function() {
                                    t()
                                })
                            }
                        },
                        e.prototype.doExplicitRender = function(t, n, i, r) {
                            var s = {
                                sitekey: n,
                                badge: i.badge,
                                size: i.size,
                                tabindex: i.tabindex
                            };
                            return i.container ? r ? t.enterprise.render(i.container, s) : t.render(i.container, s) : r ? t.enterprise.render(s) : t.render(s)
                        },
                        e.loadingState = null,
                        e.instance = null,
                        e.instanceSiteKey = null,
                        e.successfulLoadingConsumers = [],
                        e.errorLoadingRunnable = [],
                        e.SCRIPT_LOAD_DELAY = 25,
                        e
                    } ();
                    Bt.load = ao.load,
                    Bt.getInstance = ao.getInstance,
                    function(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.ReCaptchaInstance = e.getInstance = e.load = void 0;
                        var t = Bt;
                        Object.defineProperty(e, "load", {
                            enumerable: !0,
                            get: function() {
                                return t.load
                            }
                        }),
                        Object.defineProperty(e, "getInstance", {
                            enumerable: !0,
                            get: function() {
                                return t.getInstance
                            }
                        });
                        var n = _n;
                        Object.defineProperty(e, "ReCaptchaInstance", {
                            enumerable: !0,
                            get: function() {
                                return n.ReCaptchaInstance
                            }
                        })
                    } (oo);
                    const co = {},
                    Bf = e =>{
                        const t = co[e] ??(co[e] = oo.load(e, {
                            useRecaptchaNet: !0,
                            autoHideBadge: !0
                        }));
                        return {
                            execute: n =>t.then(i =>i.execute(n))
                        }
                    },
                    Wf = e =>({
                        execute: async t =>{
                            const {
                                load: n
                            } = Cu("https://challenges.cloudflare.com/turnstile/v0/api.js", void 0, {
                                async: !1
                            });
                            await n();
                            const i = window == null ? void 0 : window.turnstile;
                            return new Promise(r =>{
                                i == null || i.ready(() =>{
                                    i == null || i.render(".wl-captcha-container", {
                                        sitekey: e,
                                        action: t,
                                        size: "compact",
                                        callback: r
                                    })
                                })
                            })
                        }
                    }),
                    qf = "WALINE_USER";
                    let uo = null;
                    const wi = () =>uo ??(uo = Vt(qf, {})),
                    Kf = {
                        key: 0,
                        class: "wl-reaction"
                    },
                    Zf = ["textContent"],
                    Gf = {
                        class: "wl-reaction-list"
                    },
                    Qf = ["onClick"],
                    Jf = {
                        class: "wl-reaction-img"
                    },
                    Yf = ["src", "alt"],
                    Xf = ["textContent"],
                    eh = ["textContent"];
                    var th = ln({
                        __name: "ArticleReaction",
                        setup(e, {
                            expose: t
                        }) {
                            t();
                            const n = Uf(),
                            i = Xn("config"),
                            r = K( - 1),
                            s = K([]),
                            l = be(() =>i.value.locale),
                            o = be(() =>i.value.reaction.length > 0),
                            a = be(() =>{
                                const {
                                    reaction: d,
                                    path: m
                                } = i.value;
                                return d.map((S, x) =>({
                                    icon: S,
                                    desc: l.value[`reaction$ {
                                        x
                                    }`],
                                    active: n.value[m] === x
                                }))
                            });
                            let c;
                            const f = async() =>{
                                if (!o.value) return;
                                const {
                                    serverURL: d,
                                    lang: m,
                                    path: S,
                                    reaction: x
                                } = i.value,
                                C = new AbortController;
                                c = C.abort.bind(C);
                                const w = await Ci({
                                    serverURL: d,
                                    lang: m,
                                    paths: [S],
                                    type: x.map((T, j) =>`reaction$ {
                                        j
                                    }`),
                                    signal: C.signal
                                });
                                s.value = x.map((T, j) =>w[0][`reaction$ {
                                    j
                                }`])
                            },
                            p = async d =>{
                                if (r.value === -1) {
                                    const {
                                        serverURL: m,
                                        lang: S,
                                        path: x
                                    } = i.value,
                                    C = n.value[x];
                                    r.value = d,
                                    C !== void 0 && (await Sn({
                                        serverURL: m,
                                        lang: S,
                                        path: x,
                                        type: `reaction$ {
                                            C
                                        }`,
                                        action: "desc"
                                    }), s.value[C] = Math.max(s.value[C] - 1, 0)),
                                    C !== d && (await Sn({
                                        serverURL: m,
                                        lang: S,
                                        path: x,
                                        type: `reaction$ {
                                            d
                                        }`
                                    }), s.value[d] = (s.value[d] || 0) + 1),
                                    C === d ? delete n.value[x] : n.value[x] = d,
                                    r.value = -1
                                }
                            };
                            return on(() =>{
                                Pe(() =>[i.value.serverURL, i.value.path], () =>{
                                    f()
                                },
                                {
                                    immediate: !0
                                })
                            }),
                            Jn(() =>c == null ? void 0 : c()),
                            (d, m) =>a.value.length ? (L(), O("div", Kf, [F("div", {
                                class: "wl-reaction-title",
                                textContent: ne(l.value.reactionTitle)
                            },
                            null, 8, Zf), F("ul", Gf, [(L(!0), O(oe, null, Fe(a.value, ({
                                active: S,
                                icon: x,
                                desc: C
                            },
                            w) =>(L(), O("li", {
                                key: w,
                                class: pe(["wl-reaction-item", {
                                    active: S
                                }]),
                                onClick: T =>p(w)
                            },
                            [F("div", Jf, [F("img", {
                                src: x,
                                alt: C
                            },
                            null, 8, Yf), r.value === w ? (L(), Ye(G(xn), {
                                key: 0,
                                class: "wl-reaction-loading"
                            })) : (L(), O("div", {
                                key: 1,
                                class: "wl-reaction-votes",
                                textContent: ne(s.value[w] || 0)
                            },
                            null, 8, Xf))]), F("div", {
                                class: "wl-reaction-text",
                                textContent: ne(C)
                            },
                            null, 8, eh)], 10, Qf))), 128))])])) : Y("v-if", !0)
                        }
                    }),
                    Cn = (e, t) =>{
                        const n = e.__vccOpts || e;
                        for (const[i, r] of t) n[i] = r;
                        return n
                    },
                    nh = Cn(th, [["__file", "ArticleReaction.vue"]]),
                    $n = new Map;
                    function ih(e) {
                        var t = $n.get(e);
                        t && t.destroy()
                    }
                    function rh(e) {
                        var t = $n.get(e);
                        t && t.update()
                    }
                    var En = null;
                    typeof window > "u" ? ((En = function(e) {
                        return e
                    }).destroy = function(e) {
                        return e
                    },
                    En.update = function(e) {
                        return e
                    }) : ((En = function(e, t) {
                        return e && Array.prototype.forEach.call(e.length ? e: [e],
                        function(n) {
                            return function(i) {
                                if (i && i.nodeName && i.nodeName === "TEXTAREA" && !$n.has(i)) {
                                    var r, s = null,
                                    l = window.getComputedStyle(i),
                                    o = (r = i.value,
                                    function() {
                                        c({
                                            testForHeightReduction: r === "" || !i.value.startsWith(r),
                                            restoreTextAlign: null
                                        }),
                                        r = i.value
                                    }),
                                    a = (function(p) {
                                        i.removeEventListener("autosize:destroy", a),
                                        i.removeEventListener("autosize:update", f),
                                        i.removeEventListener("input", o),
                                        window.removeEventListener("resize", f),
                                        Object.keys(p).forEach(function(d) {
                                            return i.style[d] = p[d]
                                        }),
                                        $n.delete(i)
                                    }).bind(i, {
                                        height: i.style.height,
                                        resize: i.style.resize,
                                        textAlign: i.style.textAlign,
                                        overflowY: i.style.overflowY,
                                        overflowX: i.style.overflowX,
                                        wordWrap: i.style.wordWrap
                                    });
                                    i.addEventListener("autosize:destroy", a),
                                    i.addEventListener("autosize:update", f),
                                    i.addEventListener("input", o),
                                    window.addEventListener("resize", f),
                                    i.style.overflowX = "hidden",
                                    i.style.wordWrap = "break-word",
                                    $n.set(i, {
                                        destroy: a,
                                        update: f
                                    }),
                                    f()
                                }
                                function c(p) {
                                    var d, m, S = p.restoreTextAlign,
                                    x = S === void 0 ? null: S,
                                    C = p.testForHeightReduction,
                                    w = C === void 0 || C,
                                    T = l.overflowY;
                                    if (i.scrollHeight !== 0 && (l.resize === "vertical" ? i.style.resize = "none": l.resize === "both" && (i.style.resize = "horizontal"), w && (d = function(N) {
                                        for (var P = []; N && N.parentNode && N.parentNode instanceof Element;) N.parentNode.scrollTop && P.push([N.parentNode, N.parentNode.scrollTop]),
                                        N = N.parentNode;
                                        return function() {
                                            return P.forEach(function(z) {
                                                var W = z[0],
                                                B = z[1];
                                                W.style.scrollBehavior = "auto",
                                                W.scrollTop = B,
                                                W.style.scrollBehavior = null
                                            })
                                        }
                                    } (i), i.style.height = ""), m = l.boxSizing === "content-box" ? i.scrollHeight - (parseFloat(l.paddingTop) + parseFloat(l.paddingBottom)) : i.scrollHeight + parseFloat(l.borderTopWidth) + parseFloat(l.borderBottomWidth), l.maxHeight !== "none" && m > parseFloat(l.maxHeight) ? (l.overflowY === "hidden" && (i.style.overflow = "scroll"), m = parseFloat(l.maxHeight)) : l.overflowY !== "hidden" && (i.style.overflow = "hidden"), i.style.height = m + "px", x && (i.style.textAlign = x), d && d(), s !== m && (i.dispatchEvent(new Event("autosize:resized", {
                                        bubbles: !0
                                    })), s = m), T !== l.overflow && !x)) {
                                        var j = l.textAlign;
                                        l.overflow === "hidden" && (i.style.textAlign = j === "start" ? "end": "start"),
                                        c({
                                            restoreTextAlign: j,
                                            testForHeightReduction: !0
                                        })
                                    }
                                }
                                function f() {
                                    c({
                                        testForHeightReduction: !0,
                                        restoreTextAlign: null
                                    })
                                }
                            } (n)
                        }),
                        e
                    }).destroy = function(e) {
                        return e && Array.prototype.forEach.call(e.length ? e: [e], ih),
                        e
                    },
                    En.update = function(e) {
                        return e && Array.prototype.forEach.call(e.length ? e: [e], rh),
                        e
                    });
                    var fo = En;
                    const sh = ["data-index"],
                    lh = ["src", "title", "onClick"];
                    var oh = ln({
                        __name: "ImageWall",
                        props: {
                            items: {
                            default:
                                () =>[]
                            },
                            columnWidth: {
                            default:
                                300
                            },
                            gap: {
                            default:
                                0
                            }
                        },
                        emits: ["insert"],
                        setup(e, {
                            expose: t
                        }) {
                            const n = e;
                            t();
                            let i = null;
                            const r = K(null),
                            s = K({}),
                            l = K([]),
                            o = () =>{
                                const d = Math.floor((r.value.getBoundingClientRect().width + n.gap) / (n.columnWidth + n.gap));
                                return d > 0 ? d: 1
                            },
                            a = d =>new Array(d).fill(null).map(() =>[]),
                            c = async d =>{
                                var m;
                                if (d >= n.items.length) return;
                                await rn();
                                const S = Array.from(((m = r.value) == null ? void 0 : m.children) || []).reduce((x, C) =>C.getBoundingClientRect().height < x.getBoundingClientRect().height ? C: x);
                                l.value[Number(S.dataset.index)].push(d),
                                await c(d + 1)
                            },
                            f = async(d = !1) =>{
                                if (l.value.length === o() && !d) return;
                                l.value = a(o());
                                const m = window.scrollY;
                                await c(0),
                                window.scrollTo({
                                    top: m
                                })
                            },
                            p = d =>{
                                s.value[d.target.src] = !0
                            };
                            return on(() =>{
                                f(!0),
                                i = new ResizeObserver(() =>{
                                    f()
                                }),
                                i.observe(r.value),
                                Pe(() =>[n.items], () =>{
                                    s.value = {},
                                    f(!0)
                                }),
                                Pe(() =>[n.columnWidth, n.gap], () =>{
                                    f()
                                })
                            }),
                            Za(() =>i.unobserve(r.value)),
                            (d, m) =>(L(), O("div", {
                                ref_key: "wall",
                                ref: r,
                                class: "wl-gallery",
                                style: Yt({
                                    gap: `$ {
                                        d.gap
                                    }
                                    px`
                                })
                            },
                            [(L(!0), O(oe, null, Fe(l.value, (S, x) =>(L(), O("div", {
                                key: x,
                                class: "wl-gallery-column",
                                "data-index": x,
                                style: Yt({
                                    gap: `$ {
                                        d.gap
                                    }
                                    px`
                                })
                            },
                            [(L(!0), O(oe, null, Fe(S, C =>(L(), O(oe, {
                                key: C
                            },
                            [s.value[d.items[C].src] ? Y("v-if", !0) : (L(), Ye(G(xn), {
                                key: 0,
                                size: 36,
                                style: {
                                    margin: "20px auto"
                                }
                            })), F("img", {
                                class: "wl-gallery-item",
                                src: d.items[C].src,
                                title: d.items[C].title,
                                loading: "lazy",
                                onLoad: p,
                                onClick: w =>d.$emit("insert", ` ! []($ {
                                    d.items[C].src
                                })`)
                            },
                            null, 40, lh)], 64))), 128))], 12, sh))), 128))], 4))
                        }
                    }),
                    ah = Cn(oh, [["__file", "ImageWall.vue"]]);
                    const ch = {
                        class: "wl-comment"
                    },
                    uh = {
                        key: 0,
                        class: "wl-login-info"
                    },
                    fh = {
                        class: "wl-avatar"
                    },
                    hh = ["title"],
                    dh = ["title"],
                    ph = ["src"],
                    gh = ["title", "textContent"],
                    mh = {
                        class: "wl-panel"
                    },
                    vh = ["for", "textContent"],
                    yh = ["id", "onUpdate:modelValue", "name", "type"],
                    wh = ["placeholder"],
                    bh = {
                        class: "wl-preview"
                    },
                    kh = F("hr", null, null, -1),
                    xh = ["innerHTML"],
                    _h = {
                        class: "wl-footer"
                    },
                    Ch = {
                        class: "wl-actions"
                    },
                    $h = {
                        href: "https://guides.github.com/features/mastering-markdown/",
                        title: "Markdown Guide",
                        "aria-label": "Markdown is supported",
                        class: "wl-action",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    Eh = ["title"],
                    Th = ["title"],
                    Rh = ["title"],
                    Sh = ["title"],
                    Ah = {
                        class: "wl-info"
                    },
                    Ih = F("div", {
                        class: "wl-captcha-container"
                    },
                    null, -1),
                    Lh = {
                        class: "wl-text-number"
                    },
                    Mh = {
                        key: 0
                    },
                    Oh = ["textContent"],
                    zh = ["textContent"],
                    jh = ["disabled"],
                    Ph = ["placeholder"],
                    Fh = {
                        key: 1,
                        class: "wl-"
                    },
                    Uh = {
                        key: 0,
                        class: "wl-tab-wrapper"
                    },
                    Nh = ["title", "onClick"],
                    Hh = ["src", "alt"],
                    Dh = {
                        key: 0,
                        class: "wl-tabs"
                    },
                    Vh = ["onClick"],
                    Bh = ["src", "alt", "title"],
                    Wh = ["title"];
                    var qh = ln({
                        __name: "CommentBox",
                        props: {
                            edit: {
                            default:
                                null
                            },
                            rootId: {
                            default:
                                ""
                            },
                            replyId: {
                            default:
                                ""
                            },
                            replyUser: {
                            default:
                                ""
                            }
                        },
                        emits: ["log", "cancelEdit", "cancelReply", "submit"],
                        setup(e, {
                            expose: t,
                            emit: n
                        }) {
                            const i = e,
                            r = n;
                            t();
                            const s = Xn("config"),
                            l = jf(),
                            o = zf(),
                            a = wi(),
                            c = K({}),
                            f = K(null),
                            p = K(null),
                            d = K(null),
                            m = K(null),
                            S = K(null),
                            x = K(null),
                            C = K(null),
                            w = K({
                                tabs: [],
                                map: {}
                            }),
                            T = K(0),
                            j = K(!1),
                            N = K(!1),
                            P = K(!1),
                            z = K(""),
                            W = K(0),
                            B = Xt({
                                loading: !0,
                                list: []
                            }),
                            Q = K(0),
                            ae = K(!1),
                            _e = K(""),
                            ve = K(!1),
                            q = K(!1),
                            D = be(() =>s.value.locale),
                            ie = be(() =>{
                                var M;
                                return !! ((M = a.value) != null && M.token)
                            }),
                            ge = be(() =>s.value.imageUploader !== !1),
                            de = M =>{
                                const A = f.value,
                                u = A.selectionStart,
                                h = A.selectionEnd || 0,
                                g = A.scrollTop;
                                l.value = A.value.substring(0, u) + M + A.value.substring(h, A.value.length),
                                A.focus(),
                                A.selectionStart = u + M.length,
                                A.selectionEnd = u + M.length,
                                A.scrollTop = g
                            },
                            ke = M =>{
                                const A = M.key; (M.ctrlKey || M.metaKey) && A === "Enter" && Wt()
                            },
                            ye = M =>{
                                const A = ` ! [$ {
                                    s.value.locale.uploading
                                }
                                $ {
                                    M.name
                                }]()`;
                                return de(A),
                                ve.value = !0,
                                Promise.resolve().then(() =>s.value.imageUploader(M)).then(u =>{
                                    l.value = l.value.replace(A, `\r ! [$ {
                                        M.name
                                    }]($ {
                                        u
                                    })`)
                                }).
                                catch(u =>{
                                    alert(u.message),
                                    l.value = l.value.replace(A, "")
                                }).then(() =>{
                                    ve.value = !1
                                })
                            },
                            rt = M =>{
                                var A;
                                if ((A = M.dataTransfer) != null && A.items) {
                                    const u = Ll(M.dataTransfer.items);
                                    u && ge.value && (ye(u), M.preventDefault())
                                }
                            },
                            mt = M =>{
                                if (M.clipboardData) {
                                    const A = Ll(M.clipboardData.items);
                                    A && ge.value && ye(A)
                                }
                            },
                            Oe = () =>{
                                const M = p.value;
                                M.files && ge.value && ye(M.files[0]).then(() =>{
                                    M.value = ""
                                })
                            },
                            Wt = async() =>{
                                var M, A, u, h, g, v;
                                const {
                                    serverURL: y,
                                    lang: k,
                                    login: E,
                                    wordLimit: _,
                                    requiredMeta: $,
                                    recaptchaV3Key: b,
                                    turnstileKey: I
                                } = s.value,
                                U = await Cf(),
                                R = {
                                    comment: _e.value,
                                    nick: o.value.nick,
                                    mail: o.value.mail,
                                    link: o.value.link,
                                    url: s.value.path,
                                    ua: U
                                };
                                if ((M = a.value) != null && M.token && !i.edit) R.nick = a.value.display_name,
                                R.mail = a.value.email,
                                R.link = a.value.url;
                                else {
                                    if (E === "force") return;
                                    if ($.indexOf("nick") > -1 && !R.nick) return (A = c.value.nick) == null || A.focus(),
                                    alert(D.value.nickError);
                                    if ($.indexOf("mail") > -1 && !R.mail || R.mail && !Do(R.mail)) return (u = c.value.mail) == null || u.focus(),
                                    alert(D.value.mailError);
                                    R.nick || (R.nick = D.value.anonymous)
                                }
                                if (!R.comment) { (h = f.value) == null || h.focus();
                                    return
                                }
                                if (!ae.value) return alert(D.value.wordHint.replace("$0", _[0].toString()).replace("$1", _[1].toString()).replace("$2", W.value.toString()));
                                R.comment = to(R.comment, w.value.map),
                                i.replyId && i.rootId && (R.pid = i.replyId, R.rid = i.rootId, R.at = i.replyUser),
                                ve.value = !0;
                                try {
                                    b && (R.recaptchaV3 = await Bf(b).execute("social")),
                                    I && (R.turnstile = await Wf(I).execute("social"));
                                    const H = {
                                        serverURL: y,
                                        lang: k,
                                        token: (g = a.value) == null ? void 0 : g.token,
                                        comment: R
                                    },
                                    Z = await(i.edit ? Zt({
                                        objectId: i.edit.objectId,
                                        ...H
                                    }) : Ar(H));
                                    if (ve.value = !1, Z.errmsg) return alert(Z.errmsg);
                                    r("submit", Z.data),
                                    l.value = "",
                                    z.value = "",
                                    i.replyId && r("cancelReply"),
                                    (v = i.edit) != null && v.objectId && r("cancelEdit")
                                } catch(H) {
                                    ve.value = !1,
                                    alert(H.message)
                                }
                            },
                            ki = M =>{
                                M.preventDefault();
                                const {
                                    lang: A,
                                    serverURL: u
                                } = s.value;
                                Mr({
                                    serverURL: u,
                                    lang: A
                                }).then(h =>{
                                    a.value = h,
                                    (h.remember ? localStorage: sessionStorage).setItem("WALINE_USER", JSON.stringify(h)),
                                    r("log")
                                })
                            },
                            xi = () =>{
                                a.value = {},
                                localStorage.setItem("WALINE_USER", "null"),
                                sessionStorage.setItem("WALINE_USER", "null"),
                                r("log")
                            },
                            ze = M =>{
                                M.preventDefault();
                                const {
                                    lang: A,
                                    serverURL: u
                                } = s.value,
                                h = 800,
                                g = 800,
                                v = (window.innerWidth - h) / 2,
                                y = (window.innerHeight - g) / 2,
                                k = new URLSearchParams({
                                    lng: A,
                                    token: a.value.token
                                }),
                                E = window.open(`$ {
                                    u
                                }
                                /ui/profile ? $ {
                                    k.toString()
                                }`, "_blank", `width = $ {
                                    h
                                },
                                height = $ {
                                    g
                                },
                                left = $ {
                                    v
                                },
                                top = $ {
                                    y
                                },
                                scrollbars = no, resizable = no, status = no, location = no, toolbar = no, menubar = no`);
                                E == null || E.postMessage({
                                    type: "TOKEN",
                                    data: a.value.token
                                },
                                "*")
                            },
                            vt = M =>{
                                var A, u, h, g; ! ((A = d.value) != null && A.contains(M.target)) && !((u = m.value) != null && u.contains(M.target)) && (j.value = !1),
                                !((h = S.value) != null && h.contains(M.target)) && !((g = x.value) != null && g.contains(M.target)) && (N.value = !1)
                            },
                            St = async M =>{
                                var A;
                                const {
                                    scrollTop: u,
                                    clientHeight: h,
                                    scrollHeight: g
                                } = M.target,
                                v = (h + u) / g,
                                y = s.value.search,
                                k = ((A = C.value) == null ? void 0 : A.value) || "";
                                v < .9 || B.loading || q.value || (B.loading = !0, (y.more && B.list.length ? await y.more(k, B.list.length) : await y.search(k)).length ? B.list = [...B.list, ...y.more && B.list.length ? await y.more(k, B.list.length) : await y.search(k)] : q.value = !0, B.loading = !1, setTimeout(() =>{
                                    M.target.scrollTop = u
                                },
                                50))
                            },
                            qt = fu(M =>{
                                B.list = [],
                                q.value = !1,
                                St(M)
                            },
                            300);
                            Pe([s, W], ([M, A]) =>{
                                const {
                                    wordLimit: u
                                } = M;
                                u ? A < u[0] && u[0] !== 0 ? (Q.value = u[0], ae.value = !1) : A > u[1] ? (Q.value = u[1], ae.value = !1) : (Q.value = u[1], ae.value = !0) : (Q.value = 0, ae.value = !0)
                            },
                            {
                                immediate: !0
                            });
                            const Ze = ({
                                data: M
                            }) =>{ ! M || M.type !== "profile" || (a.value = {...a.value,
                                    ...M.data
                                },
                                [localStorage, sessionStorage].filter(A =>A.getItem("WALINE_USER")).forEach(A =>A.setItem("WALINE_USER", JSON.stringify(a))))
                            };
                            return on(() =>{
                                var M;
                                document.body.addEventListener("click", vt),
                                window.addEventListener("message", Ze),
                                (M = i.edit) != null && M.objectId && (l.value = i.edit.orig),
                                Pe(N, async A =>{
                                    if (!A) return;
                                    const u = s.value.search;
                                    C.value && (C.value.value = ""),
                                    B.loading = !0,
                                    B.list = u.
                                default ? await u.
                                default():
                                    await u.search(""),
                                    B.loading = !1
                                }),
                                Pe(() =>l.value, A =>{
                                    const {
                                        highlighter: u,
                                        texRenderer: h
                                    } = s.value;
                                    _e.value = A,
                                    z.value = bf(A, {
                                        emojiMap: w.value.map,
                                        highlighter: u,
                                        texRenderer: h
                                    }),
                                    W.value = _f(A),
                                    A ? fo(f.value) : fo.destroy(f.value)
                                },
                                {
                                    immediate: !0
                                }),
                                Pe(() =>s.value.emoji, A =>Su(A).then(u =>{
                                    w.value = u
                                }), {
                                    immediate: !0
                                })
                            }),
                            Jn(() =>{
                                document.body.removeEventListener("click", vt),
                                window.removeEventListener("message", Ze)
                            }),
                            (M, A) =>{
                                var u, h;
                                return L(),
                                O("div", ch, [G(s).login !== "disable" && ie.value && !((u = M.edit) != null && u.objectId) ? (L(), O("div", uh, [F("div", fh, [F("button", {
                                    type: "submit",
                                    class: "wl-logout-btn",
                                    title: D.value.logout,
                                    onClick: xi
                                },
                                [se(G(io), {
                                    size: 14
                                })], 8, hh), F("a", {
                                    href: "#",
                                    class: "wl-login-nick",
                                    "aria-label": "Profile",
                                    title: D.value.profile,
                                    onClick: ze
                                },
                                [F("img", {
                                    src: G(a).avatar,
                                    alt: "avatar"
                                },
                                null, 8, ph)], 8, dh)]), F("a", {
                                    href: "#",
                                    class: "wl-login-nick",
                                    "aria-label": "Profile",
                                    title: D.value.profile,
                                    onClick: ze,
                                    textContent: ne(G(a).display_name)
                                },
                                null, 8, gh)])) : Y("v-if", !0), F("div", mh, [G(s).login !== "force" && G(s).meta.length && !ie.value ? (L(), O("div", {
                                    key: 0,
                                    class: pe(["wl-header", `item$ {
                                        G(s).meta.length
                                    }`])
                                },
                                [(L(!0), O(oe, null, Fe(G(s).meta, g =>(L(), O("div", {
                                    key: g,
                                    class: "wl-header-item"
                                },
                                [F("label", {
                                    for: `wl - $ {
                                        g
                                    }`,
                                    textContent: ne(D.value[g] + (G(s).requiredMeta.includes(g) || !G(s).requiredMeta.length ? "": ` ($ {
                                        D.value.optional
                                    })`))
                                },
                                null, 8, vh), Gn(F("input", {
                                    id: `wl - $ {
                                        g
                                    }`,
                                    ref_for: !0,
                                    ref: v =>{
                                        v && (c.value[g] = v)
                                    },
                                    "onUpdate:modelValue": v =>G(o)[g] = v,
                                    class: pe(["wl-input", `wl - $ {
                                        g
                                    }`]),
                                    name: g,
                                    type: g === "mail" ? "email": "text"
                                },
                                null, 10, yh), [[eu, G(o)[g]]])]))), 128))], 2)) : Y("v-if", !0), Gn(F("textarea", {
                                    id: "wl-edit",
                                    ref_key: "editorRef",
                                    ref: f,
                                    "onUpdate:modelValue": A[0] || (A[0] = g =>$e(l) ? l.value = g: null),
                                    class: "wl-editor",
                                    placeholder: M.replyUser ? `@$ {
                                        M.replyUser
                                    }`: D.value.placeholder,
                                    onKeydown: ke,
                                    onDrop: rt,
                                    onPaste: mt
                                },
                                null, 40, wh), [[hr, G(l)]]), Gn(F("div", bh, [kh, F("h4", null, ne(D.value.preview) + ":", 1), F("div", {
                                    class: "wl-content",
                                    innerHTML: z.value
                                },
                                null, 8, xh)], 512), [[hl, P.value]]), F("div", _h, [F("div", Ch, [F("a", $h, [se(G(Af))]), Gn(F("button", {
                                    ref_key: "emojiButtonRef",
                                    ref: d,
                                    type: "button",
                                    class: pe(["wl-action", {
                                        active: j.value
                                    }]),
                                    title: D.value.emoji,
                                    onClick: A[1] || (A[1] = g =>j.value = !j.value)
                                },
                                [se(G(Ef))], 10, Eh), [[hl, w.value.tabs.length]]), G(s).search ? (L(), O("button", {
                                    key: 0,
                                    ref_key: "gifButtonRef",
                                    ref: S,
                                    type: "button",
                                    class: pe(["wl-action", {
                                        active: N.value
                                    }]),
                                    title: D.value.gif,
                                    onClick: A[2] || (A[2] = g =>N.value = !N.value)
                                },
                                [se(G(Of))], 10, Th)) : Y("v-if", !0), F("input", {
                                    id: "wl-image-upload",
                                    ref_key: "imageUploadRef",
                                    ref: p,
                                    class: "upload",
                                    type: "file",
                                    accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
                                    onChange: Oe
                                },
                                null, 544), ge.value ? (L(), O("label", {
                                    key: 1,
                                    for: "wl-image-upload",
                                    class: "wl-action",
                                    title: D.value.uploadImage
                                },
                                [se(G(Tf))], 8, Rh)) : Y("v-if", !0), F("button", {
                                    type: "button",
                                    class: pe(["wl-action", {
                                        active: P.value
                                    }]),
                                    title: D.value.preview,
                                    onClick: A[3] || (A[3] = g =>P.value = !P.value)
                                },
                                [se(G(Sf))], 10, Sh)]), F("div", Ah, [Ih, F("div", Lh, [Xe(ne(W.value) + " ", 1), G(s).wordLimit ? (L(), O("span", Mh, [Xe("  /  "), F("span", {
                                    class: pe({
                                        illegal: !ae.value
                                    }),
                                    textContent: ne(Q.value)
                                },
                                null, 10, Oh)])) : Y("v-if", !0), Xe("  " + ne(D.value.word), 1)]), G(s).login !== "disable" && !ie.value ? (L(), O("button", {
                                    key: 0,
                                    type: "button",
                                    class: "wl-btn",
                                    onClick: ki,
                                    textContent: ne(D.value.login)
                                },
                                null, 8, zh)) : Y("v-if", !0), G(s).login !== "force" || ie.value ? (L(), O("button", {
                                    key: 1,
                                    type: "submit",
                                    class: "primary wl-btn",
                                    title: "Cmd|Ctrl + Enter",
                                    disabled: ve.value,
                                    onClick: Wt
                                },
                                [ve.value ? (L(), Ye(G(xn), {
                                    key: 0,
                                    size: 16
                                })) : (L(), O(oe, {
                                    key: 1
                                },
                                [Xe(ne(D.value.submit), 1)], 64))], 8, jh)) : Y("v-if", !0)]), F("div", {
                                    ref_key: "gifPopupRef",
                                    ref: x,
                                    class: pe(["wl-gif-popup", {
                                        display: N.value
                                    }])
                                },
                                [F("input", {
                                    ref_key: "gifSearchInputRef",
                                    ref: C,
                                    type: "text",
                                    placeholder: D.value.gifSearchPlaceholder,
                                    onInput: A[4] || (A[4] = (...g) =>G(qt) && G(qt)(...g))
                                },
                                null, 40, Ph), B.list.length ? (L(), Ye(ah, {
                                    key: 0,
                                    items: B.list,
                                    "column-width": 200,
                                    gap: 6,
                                    onInsert: A[5] || (A[5] = g =>de(g)),
                                    onScroll: St
                                },
                                null, 8, ["items"])) : Y("v-if", !0), B.loading ? (L(), O("div", Fh, [se(G(xn), {
                                    size: 30
                                })])) : Y("v-if", !0)], 2), F("div", {
                                    ref_key: "emojiPopupRef",
                                    ref: m,
                                    class: pe(["wl-emoji-popup", {
                                        display: j.value
                                    }])
                                },
                                [(L(!0), O(oe, null, Fe(w.value.tabs, (g, v) =>(L(), O(oe, {
                                    key: g.name
                                },
                                [v === T.value ? (L(), O("div", Uh, [(L(!0), O(oe, null, Fe(g.items, y =>(L(), O("button", {
                                    key: y,
                                    type: "button",
                                    title: y,
                                    onClick: k =>de(`: $ {
                                        y
                                    }: `)
                                },
                                [j.value ? (L(), O("img", {
                                    key: 0,
                                    class: "wl-emoji",
                                    src: w.value.map[y],
                                    alt: y,
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer"
                                },
                                null, 8, Hh)) : Y("v-if", !0)], 8, Nh))), 128))])) : Y("v-if", !0)], 64))), 128)), w.value.tabs.length > 1 ? (L(), O("div", Dh, [(L(!0), O(oe, null, Fe(w.value.tabs, (g, v) =>(L(), O("button", {
                                    key: g.name,
                                    type: "button",
                                    class: pe(["wl-tab", {
                                        active: T.value === v
                                    }]),
                                    onClick: y =>T.value = v
                                },
                                [F("img", {
                                    class: "wl-emoji",
                                    src: g.icon,
                                    alt: g.name,
                                    title: g.name,
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer"
                                },
                                null, 8, Bh)], 10, Vh))), 128))])) : Y("v-if", !0)], 2)])]), M.replyId || (h = M.edit) != null && h.objectId ? (L(), O("button", {
                                    key: 1,
                                    type: "button",
                                    class: "wl-close",
                                    title: D.value.cancelReply,
                                    onClick: A[6] || (A[6] = g =>M.$emit(M.replyId ? "cancelReply": "cancelEdit"))
                                },
                                [se(G(io), {
                                    size: 24
                                })], 8, Wh)) : Y("v-if", !0)])
                            }
                        }
                    }),
                    ho = Cn(qh, [["__file", "CommentBox.vue"]]);
                    const Kh = ["id"],
                    Zh = {
                        class: "wl-user",
                        "aria-hidden": "true"
                    },
                    Gh = ["src"],
                    Qh = {
                        class: "wl-card"
                    },
                    Jh = {
                        class: "wl-head"
                    },
                    Yh = ["href"],
                    Xh = {
                        key: 1,
                        class: "wl-nick"
                    },
                    ed = ["textContent"],
                    td = ["textContent"],
                    nd = ["textContent"],
                    id = ["textContent"],
                    rd = ["textContent"],
                    sd = {
                        class: "wl-comment-actions"
                    },
                    ld = ["title"],
                    od = ["title"],
                    ad = {
                        class: "wl-meta",
                        "aria-hidden": "true"
                    },
                    cd = ["data-value", "textContent"],
                    ud = ["innerHTML"],
                    fd = {
                        key: 1,
                        class: "wl-admin-actions"
                    },
                    hd = {
                        class: "wl-comment-status"
                    },
                    dd = ["disabled", "onClick", "textContent"],
                    pd = {
                        key: 3,
                        class: "wl-quote"
                    };
                    var gd = ln({
                        __name: "CommentCard",
                        props: {
                            comment: {},
                            edit: {
                            default:
                                null
                            },
                            rootId: {},
                            reply: {
                            default:
                                null
                            }
                        },
                        emits: ["log", "submit", "delete", "edit", "like", "status", "sticky", "reply"],
                        setup(e, {
                            emit: t
                        }) {
                            const n = e,
                            i = t,
                            r = ["approved", "waiting", "spam"],
                            s = Xn("config"),
                            l = so(),
                            o = _u(),
                            a = wi(),
                            c = be(() =>s.value.locale),
                            f = be(() =>{
                                const {
                                    link: w
                                } = n.comment;
                                return w ? Jr(w) ? w: `https: //${w}`:""}),p=be(()=>l.value.includes(n.comment.objectId)),d=be(()=>No(new Date(n.comment.time),o.value,c.value)),m=be(()=>a.value.type==="administrator"),S=be(()=>n.comment.user_id&&a.value.objectId===n.comment.user_id),x=be(()=>{var w;return n.comment.objectId===((w=n.reply)==null?void 0:w.objectId)}),C=be(()=>{var w;return n.comment.objectId===((w=n.edit)==null?void 0:w.objectId)});return(w,T)=>{var j;const N=Ua("CommentCard",!0);return L(),O("div",{id:w.comment.objectId,class:"wl-card-item"},[F("div",Zh,[w.comment.avatar?(L(),O("img",{key:0,class:"wl-user-avatar",src:w.comment.avatar},null,8,Gh)):Y("v-if",!0),w.comment.type?(L(),Ye(G(Mf),{key:1})):Y("v-if",!0)]),F("div",Qh,[F("div",Jh,[f.value?(L(),O("a",{key:0,class:"wl-nick",href:f.value,target:"_blank",rel:"nofollow noopener noreferrer"},ne(w.comment.nick),9,Yh)):(L(),O("span",Xh,ne(w.comment.nick),1)),w.comment.type==="administrator"?(L(),O("span",{key:2,class:"wl-badge",textContent:ne(c.value.admin)},null,8,ed)):Y("v-if",!0),w.comment.label?(L(),O("span",{key:3,class:"wl-badge",textContent:ne(w.comment.label)},null,8,td)):Y("v-if",!0),w.comment.sticky?(L(),O("span",{key:4,class:"wl-badge",textContent:ne(c.value.sticky)},null,8,nd)):Y("v-if",!0),typeof w.comment.level=="number"?(L(),O("span",{key:5,class:pe(`wl-badge level${w.comment.level}`),textContent:ne(c.value[`level${w.comment.level}`]||`Level ${w.comment.level}`)},null,10,id)):Y("v-if",!0),F("span",{class:"wl-time",textContent:ne(d.value)},null,8,rd),F("div",sd,[m.value||S.value?(L(),O(oe,{key:0},[F("button",{type:"button",class:"wl-edit",onClick:T[0]||(T[0]=P=>i("edit",w.comment))},[se(G(Lf))]),F("button",{type:"button",class:"wl-delete",onClick:T[1]||(T[1]=P=>i("delete",w.comment))},[se(G($f))])],64)):Y("v-if",!0),F("button",{type:"button",class:"wl-like",title:p.value?c.value.cancelLike:c.value.like,onClick:T[2]||(T[2]=P=>i("like",w.comment))},[se(G(Rf),{active:p.value},null,8,["active"]),Xe(" "+ne("like"in w.comment?w.comment.like:""),1)],8,ld),F("button",{type:"button",class:pe(["wl-reply",{active:x.value}]),title:x.value?c.value.cancelReply:c.value.reply,onClick:T[3]||(T[3]=P=>i("reply",x.value?null:w.comment))},[se(G(If))],10,od)])]),F("div",ad,[(L(),O(oe,null,Fe(["addr","browser","os"],P=>(L(),O(oe,null,[w.comment[P]?(L(),O("span",{key:P,class:pe(`wl-${P}`),"data-value":w.comment[P],textContent:ne(w.comment[P])},null,10,cd)):Y("v-if",!0)],64))),64))]),C.value?Y("v-if",!0):(L(),O("div",{key:0,class:"wl-content",innerHTML:w.comment.comment},null,8,ud)),m.value&&!C.value?(L(),O("div",fd,[F("span",hd,[(L(),O(oe,null,Fe(r,P=>F("button",{key:P,type:"submit",class:pe(`wl-btn wl-${P}`),disabled:w.comment.status===P,onClick:z=>i("status",{status:P,comment:w.comment}),textContent:ne(c.value[P])},null,10,dd)),64))]),m.value&&!("rid"in w.comment)?(L(),O("button",{key:0,type:"submit",class:"wl-btn wl-sticky",onClick:T[4]||(T[4]=P=>i("sticky",w.comment))},ne(w.comment.sticky?c.value.unsticky:c.value.sticky),1)):Y("v-if",!0)])):Y("v-if",!0),x.value||C.value?(L(),O("div",{key:2,class:pe({"wl-reply-wrapper":x.value,"wl-edit-wrapper":C.value})},[se(ho,{edit:w.edit,"reply-id":(j=w.reply)==null?void 0:j.objectId,"reply-user":w.comment.nick,"root-id":w.rootId,onLog:T[5]||(T[5]=P=>i("log")),onCancelReply:T[6]||(T[6]=P=>i("reply",null)),onCancelEdit:T[7]||(T[7]=P=>i("edit",null)),onSubmit:T[8]||(T[8]=P=>i("submit",P))},null,8,["edit","reply-id","reply-user","root-id"])],2)):Y("v-if",!0),"children"in w.comment?(L(),O("div",pd,[(L(!0),O(oe,null,Fe(w.comment.children,P=>(L(),Ye(N,{key:P.objectId,comment:P,reply:w.reply,edit:w.edit,"root-id":w.rootId,onLog:T[9]||(T[9]=z=>i("log")),onDelete:T[10]||(T[10]=z=>i("delete",z)),onEdit:T[11]||(T[11]=z=>i("edit",z)),onLike:T[12]||(T[12]=z=>i("like",z)),onReply:T[13]||(T[13]=z=>i("reply",z)),onStatus:T[14]||(T[14]=z=>i("status",z)),onSticky:T[15]||(T[15]=z=>i("sticky",z)),onSubmit:T[16]||(T[16]=z=>i("submit",z))},null,8,["comment","reply","edit","root-id"]))),128))])):Y("v-if",!0)])],8,Kh)}}}),md=Cn(gd,[["__file","CommentCard.vue"]]);const po="3.1.3",vd={"data-waline":""},yd={class:"wl-meta-head"},wd={class:"wl-count"},bd=["textContent"],xd=["onClick"],Cd={key:1,class:"wl-operation"},$d=["textContent"],Rd={key:4,class:"wl-operation"},Sd=["textContent"],Ad={key:5,class:"wl-power"},Id=F("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noopener noreferrer"}," Waline ",-1);var Ld=ln({__name:"WalineComment",props:["serverURL","path","meta","requiredMeta","dark","commentSorting","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","search","copyright","recaptchaV3Key","turnstileKey","reaction"],setup(e){const t=e,n={latest:"insertedAt_desc",oldest:"insertedAt_asc",hottest:"like_desc"},i=Object.keys(n),r=wi(),s=so(),l=K("loading"),o=K(0),a=K(1),c=K(0),f=be(()=>Po(t)),p=K(f.value.commentSorting),d=K([]),m=K(null),S=K(null),x=be(()=>Fo(f.value.dark)),C=be(()=>f.value.locale);Eu(x,{id:"waline-darkmode"});let w;const T=q=>{var D;const{serverURL:ie,path:ge,pageSize:de}=f.value,ke=new AbortController;l.value="loading",w==null||w(),w=ke.abort.bind(ke)},j=()=>T(a.value+1),N=()=>{o.value=0,d.value=[],T(1)},P=q=>{p.value!==q&&(p.value=q,N())},z=q=>{m.value=q},W=q=>{S.value=q},B=q=>{if(S.value)S.value.comment=q.comment,S.value.orig=q.orig;else if("rid"in q){const D=d.value.find(({objectId:ie})=>ie===q.rid);if(!D)return;Array.isArray(D.children)||(D.children=[]),D.children.push(q)}else d.value.unshift(q),o.value+=1},Q=async({comment:q,status:D})=>{var ie;if(q.status===D)return;const{serverURL:ge,lang:de}=f.value;await Zt({serverURL:ge,lang:de,token:(ie=r.value)==null?void 0:ie.token,objectId:q.objectId,comment:{status:D}}),q.status=D},ae=async q=>{var D;if("rid"in q)return;const{serverURL:ie,lang:ge}=f.value;await Zt({serverURL:ie,lang:ge,token:(D=r.value)==null?void 0:D.token,objectId:q.objectId,comment:{sticky:q.sticky?0:1}}),q.sticky=!q.sticky},_e=async({objectId:q})=>{var D;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:ie,lang:ge}=f.value;await Ir({serverURL:ie,lang:ge,token:(D=r.value)==null?void 0:D.token,objectId:q}),d.value.some((de,ke)=>de.objectId===q?(d.value=d.value.filter((ye,rt)=>rt!==ke),!0):de.children.some((ye,rt)=>ye.objectId===q?(d.value[ke].children=de.children.filter((mt,Oe)=>Oe!==rt),!0):!1))},ve=async q=>{var D;const{serverURL:ie,lang:ge}=f.value,{objectId:de}=q,ke=s.value.includes(de);await Zt({serverURL:ie,lang:ge,objectId:de,token:(D=r.value)==null?void 0:D.token,comment:{like:!ke}}),ke?s.value=s.value.filter(ye=>ye!==de):(s.value=[...s.value,de],s.value.length>50&&(s.value=s.value.slice(-50))),q.like=(q.like||0)+(ke?-1:1)};return nc("config",f),on(()=>{Pe(()=>[t.serverURL,t.path],()=>N(),{immediate:!0})}),Jn(()=>w==null?void 0:w()),(q,D)=>(L(),O("div",vd,[se(nh),m.value?Y("v-if",!0):(L(),Ye(ho,{key:0,onLog:N,onSubmit:B})),l.value==="error"?(L(),O("div",Cd,[F("button",{type:"button",class:"wl-btn",onClick:N,textContent:ne(C.value.refresh)},null,8,$d)])):d.value.length?a.value<c.value?(L(),O("div",Rd,[F("button",{type:"button",class:"wl-btn",onClick:j,textContent:ne(C.value.more)},null,8,Sd)])):Y("v-if",!0):f.value.copyright?(L(),O("div",Ad,[Xe(" Powered by "),Id,Xe(" v"+ne(G(po)),1)])):Y("v-if",!0)]))}}),Md=Cn(Ld,[["__file","WalineComment.vue"]]);const go=(e,t)=>{t.forEach((n,i)=>{const r=e[i].time;typeof r=="number"&&(n.innerText=r.toString())})},mo=({serverURL:e,path:t=window.location.pathname,selector:n=".waline-pageview-count",update:i=!0,lang:r=navigator.language})=>{const s=new AbortController,l=Array.from(document.querySelectorAll(n)),o=c=>{const f=_r(c);return f!==null&&t!==f},a=c=>Or({serverURL:In(e),paths:c.map(f=>_r(f)||t),lang:r,signal:s.signal}).then(f=>go(f,c)).catch(Il);if(i){const c=l.filter(p=>!o(p)),f=l.filter(o);zr({serverURL:In(e),path:t,lang:r}).then(p=>go(p,c)),f.length&&a(f)}else a(l);return s.abort.bind(s)},Od=({el:e="#waline",path:t=window.location.pathname,comment:n=!1,pageview:i=!1,...r})=>{const s=e?pr(e):null;if(e&&!s)throw new Error("Option 'el' do not match any domElement!");if(!r.serverURL)throw new Error("Option 'serverURL' is missing!");const l=Xt({...r}),o=Xt({comment:n,pageview:i,path:t}),a=()=>{o.comment&&no({serverURL:l.serverURL,path:o.path,...It(o.comment)?{selector:o.comment}:{}})},c=()=>{o.pageview&&mo({serverURL:l.serverURL,path:o.path,...It(o.pageview)?{selector:o.pageview}:{}})},f=s?ru(()=>ee(Md,{path:o.path,...l})):null;f&&f.mount(s);const p=Ns(a),d=Ns(c);return{el:s,update:({comment:m,pageview:S,path:x=window.location.pathname,...C}={})=>{Object.entries(C).forEach(([w,T])=>{l[w]=T}),o.path=x,m!==void 0&&(o.comment=m),S!==void 0&&(o.pageview=S)},destroy:()=>{f==null||f.unmount(),p(),d()}}},zd=({el:e,serverURL:t,count:n,lang:i=navigator.language})=>{var r;const s=wi(),l=pr(e),o=new AbortController;return jr({serverURL:t,count:n,lang:i,signal:o.signal,token:(r=s.value)==null?void 0:r.token}).then(a=>l&&a.length?(l.innerHTML=`<ul class="wl-recent-list">${a.map(c=>`<li class="wl-recent-item"><a href="${c.url}">${c.nick}</a>：${c.comment}</li>`).join("")}</ul>`,{comments:a,destroy:()=>{o.abort(),l.innerHTML=""}}):{comments:a,destroy:()=>o.abort()})},jd=({el:e,serverURL:t,count:n,locale:i,lang:r=navigator.language,mode:s="list"})=>{const l=pr(e),o=new AbortController;return Pr({serverURL:t,pageSize:n,lang:r,signal:o.signal}).then(a=>!l||!a.length?{users:a,destroy:()=>o.abort()}:(i={...Zr(r),...typeof i=="object"?i:{}},l.innerHTML=`<ul class="wl-user-${s}">${a.map((c,f)=>[`<li class="wl-user-item" aria-label="${c.nick}">`,c.link&&`<a href="${c.link}" target="_blank">`,'<div class="wl-user-avatar">',`<img src="${c.avatar}" alt="${c.nick}">`,`<span class="wl-user-badge">${f+1}</span>`,"</div>",'<div class="wl-user-meta">','<div class="wl-user-name">',c.nick,c.level&&`<span class="wl-badge">${i?i[`level${c.level}`]:`Level ${c.level}`}</span>`,c.label&&`<span class="wl-badge">${c.label}</span>`,"</div>",c.link&&c.link,"</div>",c.link&&"</a>","</li>"].filter(p=>p).join("")).join("")}</ul>`,{users:a,destroy:()=>{o.abort(),l.innerHTML=""}}))};export{zd as RecentComments,jd as UserList,Ar as addComment,no as commentCount,An as defaultLocales,Ir as deleteComment,Lr as fetchCommentCount,Ci as getArticleCounter,Or as getPageview,jr as getRecentComment,Pr as getUserList,Od as init,Mr as login,mo as pageviewCount,Sn as updateArticleCounter,Zt as updateComment,zr as updatePageview,po as version};
                                //# sourceMappingURL=waline.js.map
                                