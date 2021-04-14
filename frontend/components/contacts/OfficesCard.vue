<template>
  <b-row
    v-if="officesCardData"
    style="margin-top: 1em;"
  >
    <b-col
      md="6"
    >
      <h3
        class="is_contacts-page-reg-title"
      >
        {{ officesCardData.contact_district }}
      </h3>
      <br>
      <p
        class="is_contacts-page-text"
      >
        {{ officesCardData.contact_address }}
      </p>
      <p
        class="is_contacts-page-text"
      >
        График работы: {{ officesCardData.contact_time }}
      </p>
      <p
        class="is_contacts-page-text"
      >
        тел.:
        <a
          :href="'tel:' + officesCardData.contact_phone"
        >
          {{ officesCardData.contact_phone }}
        </a>
      </p>
      <p
        class="is_contacts-page-text"
      >
        email:
        <a
          :href="'mailto:' + officesCardData.contact_email"
        >
          {{ officesCardData.contact_email }}
        </a>
      </p>
    </b-col>
    <b-col
      md="6"
    >
      <script
        type="text/javascript"
        charset="utf-8"
        async
        :src="officesCardData.contact_map"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'OfficesCard',
  props: {
    officesCardData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
