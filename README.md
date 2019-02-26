#### Simple Vue component to convert csv data into html table

##### Install the package:

`yarn install @vue-badger/vue-tabular`

##### Include it in your main app:

```javascript
import VueTabular from "@vue-badger/vue-tabular"

Vue.use(VueTabular)
```

##### Use the component:

```html
<vue-tabular :options="optionsObject" :csvData="your-csv-data"></vue-tabular>
```

`:options`

```javascript
{
    tableClass: 'my-table-class'
}
```

`:csvData`

```
1, 2, 3
a, b, c
```

##### Output:

<table class="my-table-class">
    <thead>
        <tr><th>1</th><th>2</th><th>3</th></tr>
    </thead>
    <tbody>
        <tr><td>a</td><td>b</td><td>c</td></tr>
    </tbody>
</table>
