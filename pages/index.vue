<script setup>
import { useDisplay } from 'vuetify'
const data = reactive({
    md: useDisplay().mobile,
    images:[
        {
            image:'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2e54344c7cc1675af721b4021222230f.jpe',
            name: 'Hunter X Hunter'
        },
        {
            image:'https://swebtoon-phinf.pstatic.net/20191123_106/1574451751649gM31d_JPEG/thumbnail.jpg',
            name: 'Steel Ball Run'
        },
        {
            image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe',
            name:'One Piece'
        },
        {
            image:'https://bancaconect.com.br/wp-content/uploads/2020/12/Naruto-Gold-35-.jpg',
            name:'Naruto'
        }
    ]
})

</script>

<template>
    <topbar :screen="data.md" />
    <banner :md="data.md" />
    <content :md="data.md" :images="data.images" />
   <pageFooter />
</template>
