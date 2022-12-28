<template>
  <q-page padding style="margin-left: 15%; margin-right: 15%;">
    <h4 class="text-center" style="margin-top: 0px;">Portfolio</h4>
    <masonry-wall :items="galleries" :ssr-columns="1" :column-width="400" :gap="16">
      <template #default="{ item }">
        <div>
          <q-img class="rounded-borders" :src="item.image">
            <div class="absolute-bottom text-subtitle1">
              <div class="row">
                <div class="col">
                  {{ item.title }}
                </div>
                <div class="col self-start">
                  <q-avatar v-for="(item, index) in item.author" :key="item" class="overlapping" size="32px"
                    color="grey-1" :style="`right: ${(index + 1) * 20}px`">
                    <img :src="teams.find((team) => team.id === item).image">
                  </q-avatar>
                </div>
              </div>
            </div>
          </q-img>
        </div>
      </template>
    </masonry-wall>
    <h4 class="text-center">Our Teams</h4>
    <div class="row q-col-gutter-xs justify-center">
      <div class="col-2" v-for="item in teams" :key="item.name">
        <div class="text-center">
          <q-avatar size="100px" color="grey-1">
            <img :src="item.image" style="padding: 2px;">
          </q-avatar>
          <div class="text-body2 text-center" style="margin: 0px;">
            {{ item.name }}
          </div>
          <div class="text-caption text-center" style="margin: 0px;">
            {{ item.role }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.overlapping
  position: absolute
</style>  

<script>
import data from "../assets/data.json"

// const getMeta = async (url) => {
//   const img = new Image();
//   img.src = url;
//   await img.decode();
//   return img
// };

export default {
  name: 'HomePage',
  pages: {
    index: {
      title: "Home"
    }
  },

  data() {
    return {
      galleries: data.galleries,
      teams: data.teams
    }
  },

  // async mounted() {
  //   const { data } = await axios.get("http://127.0.0.1:3000/api/gallery")
  //   this.galleries = data
  //   this.galleries.map(async (item) => {
  //     item.imgInfo = await getMeta(item.image)
  //   })
  //   console.log(this.galleries)
  // },
}
</script>