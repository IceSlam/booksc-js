<template>
  <main id="content">
    <Breadcrumbs
      :breadcrumbs-page-title="pageMetaTitle"
    />
    <section id="contacts-page" class="is_main-contacts-page">
      <b-container>
        <b-row>
          <b-col
            md="12"
          >
            <p style="color: #ccc;margin-bottom: 2em;" class="text-center">
              <img src="/img/logotype.png" alt="Book-Service" class="img-fluid">
            </p>
            <p style="color: #333;" class="text-center text-uppercase">
              Сеть сервисных центров
            </p>
            <p style="color: #a8312d;margin-bottom: 2em;" class="display-4 text-center text-uppercase is_main-contacts-page-title">
              Book-Service
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="6"
          >
            <p>{{ pageInfo.info_owner }}</p>
            <p
              v-if="pageInfo.info_inn"
            >
              ИНН: {{ pageInfo.info_inn }}
            </p>
            <p
              v-if="pageInfo.info_ogrnip"
            >
              ОГРНИП: {{ pageInfo.info_ogrnip }}
            </p>
            <p
              v-if="pageInfo.info_address"
            >
              Юр. адрес: {{ pageInfo.info_address }}
            </p>
            <p
              v-if="pageInfo.info_phone"
            >
              тел.: {{ pageInfo.info_phone }}
            </p>
            <p
              v-if="pageInfo.info_email"
            >
              email: {{ pageInfo.info_email }}
            </p>
          </b-col>
        </b-row>
        <Offices
          :offices-data="CONTACTS_PAGE"
        />
      </b-container>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Offices from '@/components/contacts/Offices'
import Breadcrumbs from '@/components/main/Breadcrumbs'

export default {
  name: 'ContactsPage',
  components: {
    Offices,
    Breadcrumbs
  },
  layout: 'contacts',
  data () {
    return {
      pageMetaTitle: 'Контактная информация'
    }
  },
  head () {
    return {
      title: 'Контактная информация - Сеть сервисных центров Book-Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './img/logotype.png' }]
    }
  },
  computed: {
    ...mapGetters([
      'CONTACTS_PAGE'
    ]),
    pageInfo () {
      return this.$store.state.contactPage
    }
  },
  mounted () {
    this.GET_CONTACTS_PAGE_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_CONTACTS_PAGE_FROM_API'
    ])
  }
}
</script>

<style></style>
