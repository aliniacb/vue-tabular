<template>
    <table :class="getClass" v-html="getTable"></table>
</template>

<script>
export default {
    name: 'vue-tabular',
    props: [
        'csvData',
        'options'
    ],

    computed: {
        getTable() {
            let allRows = this.csvData.split(/\r?\n|\r/).filter(v => v !== '')
            let table = ''

            for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
                if (singleRow === 0) {
                    table += '<thead>'
                    table += '<tr>'
                } else {
                    table += '<tr>'
                }

                let rowCells = allRows[singleRow].split(',')

                for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
                    if (singleRow === 0) {
                        table += '<th>'
                        table += rowCells[rowCell]
                        table += '</th>'
                    } else {
                        table += '<td>'
                        table += rowCells[rowCell]
                        table += '</td>'
                    }
                }
                if (singleRow === 0) {
                    table += '</tr>'
                    table += '</thead>'
                    table += '<tbody>'
                } else {
                    table += '</tr>'
                }
            }
            table += '</tbody>'

            return table
        },

        getClass() {
            if (this.options && this.options.tableClass) {
                return this.options.tableClass
            }
            return ''
        }
    }
}
</script>
