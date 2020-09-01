<template>
  <div class="supra-contact">
    <v-container class="supra-contact__form d-flex justify-center align-center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="sendEmail"             
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Imię"
          name="imie"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :rules="nameRules"
          label="Nazwisko"
          name="nazwisko"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          name="email"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Wybierz właściwą opcję']"
          label="Osoba fizyczna / Firma"
          name="organizacja"
          required
          class="mb-10"
        ></v-select>

        <v-textarea
          v-model="question"
          :counter="200"
          :rules="questionRules"
          label="Wiadomość"
          name="wiadomosc"
          rows="1"
          auto-grow
          clearable
          required
        ></v-textarea>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'Zaakceptuj żeby wysłać.']"
          name="zgoda"
          required
          class="mb-10"
        >
          <template #label>
            <span>Zapoznałem się z <a href="#/privacy_policy" @click.stop>POLITYKĄ PRYWATNOŚCI</a> i ją akceptuję oraz wyrażam zgodę na przetwarzanie danych osobowych. zgodnie z art. 13 ust. 1 i ust. 2 oraz art. 14 ust. 1 i ust. 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/56/ WE (dalej jako: „RODO”) stosowanego od 25 maja 2018 r.
            </span>
          </template>
        </v-checkbox>

        <v-btn
          :disabled="!valid"
          class="mr-4"
          color="blue darken-2"
          outlined
          @click="validate"
        >
          Wyślij
        </v-btn>

        <v-btn          
          class="mr-4"
          color="error"
          outlined
          @click="reset"
        >
          Wyczyść formularz
        </v-btn>
      </v-form>
    </v-container>
    <v-container class="supra-contact__data d-flex justify-center my-10">
      <v-card
        class="d-flex flex-column justify-space-around align-center pa-12"
        width="50vw"
      >
        <v-card-subtitle class="pb-4 subtitle-1">Supra Finanse</v-card-subtitle>

        <v-card-text class="text--primary text-h5">
          <p>Arkadiusz Sztaba</p>
          <p><v-icon medium>mdi-phone</v-icon> <a href="tel:530124047">530 124 047</a></p>
          <p><v-icon medium>mdi-at</v-icon> a.sztaba@suprafinanse.pl</p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="blue darken-2"
            outlined
            href="mailto:#"
          >
            Wyślij maila
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script > 
import emailjs from 'emailjs-com';
export default {
  name: "Contact", 
   data: () => ({
      valid: true,
      name: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Uzupełnij pole',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Uzupełnij email',
        v => /.+@.+\..+/.test(v) || 'Email musi być prawidłowy',
      ],
      select: null,
      items: [
        'Osoba fizyczna',
        'Firma'
      ],
      question: null,
      questionRules: [
        v => !!v || 'Uzupełnij pole',
        v => (v && v.length <= 200) || 'Pytanie nie może być dłuższe niż 200 znaków',
      ],
      checkbox: false,
      lazy: false,
    }),
    methods: {
      validate () {
        this.$recaptchaInstance.hideBadge()
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      sendEmail: (e) => {
        emailjs.sendForm('suprafinanse.pl', 'template_0ixka9q', e.target, 'user_IOvcrHPIPVyLJM1g8I3wJ')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
      }
    },
  }
</script>