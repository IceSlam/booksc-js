<template>
  <b-container
    v-if="officesData.offices_info"
  >
    <OfficesCard
      v-for="office in officesData.offices_info"
      :key="office.id"
      :offices-card-data="office"
    />
  </b-container>
</template>

<script>
import OfficesCard from './OfficesCard'

export default {
  name: 'Offices',
  components: {
    OfficesCard
  },
  props: {
    officesData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  })
}
</script>

<style scoped>

</style>
