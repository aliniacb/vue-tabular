import CsvToHtml from './components/CsvToHtml'

const VueTabular = {
    install(Vue, options) {
        Vue.component(CsvToHtml.name, CsvToHtml)
    }
}

export default VueTabular

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTabular)
}
