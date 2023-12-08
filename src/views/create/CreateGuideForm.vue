<script>
// import CustomInput from '../../components/custom-input/CustomInput.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      guide: {
        title: '',
        author: '',
        thumbnail: '',
        type: 'article',
        map: '',
        categories: [],
        content: '',
        year: null,
        terms: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();
      console.log('isValid', isValid, this.v$);

      if (isValid) {
        console.log('success', this.guide);
      }

      // make post request
      // if successful -> redirect to profile (own guides)
    },
  },
  validations() {
    return {
      guide: {
        title: { required },
        thumbnail: { required, url },
        // categories: [],
        content: { required },
        terms: { required },
      },
    };
  },
};
</script>

<template>
  <h4>Create Guide Form</h4>
  <form class="create-guide container" @submit.prevent="onSubmit">
    <!-- <div class="summary">
      <CustomInput id="summary" v-model="data.summary">
        summary
      </CustomInput>
    </div> -->
    <div class="three-cols">
      <!-- title, author, thumbnail -->
      <div class="first">
        <div class="input-type">
          <label for="title" class="label">title</label>
          <input id="title" v-model="v$.guide.title.$model" type="text">
          <div v-for="error of v$.guide.title.$errors" :key="error.$uid" class="input-errors">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div class="input-type">
          <label for="author" class="label">author</label>
          <input id="author" v-model="guide.author" type="text">
        </div>
        <div class="input-type">
          <label for="thumbnail" class="label">thumbnail</label>
          <input id="thumbnail" v-model="v$.guide.thumbnail.$model" type="text">
          <div v-for="error of v$.guide.thumbnail.$errors" :key="error.$uid" class="input-errors">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div class="input-type">
          <label for="year" class="label">year of creation</label>
          <input id="year" v-model="guide.year" type="number">
        </div>
      </div>

      <!-- type, map, categories, year -->
      <div class="second">
        <div class="input-type">
          <fieldset class="fieldset">
            <legend class="legend">
              guide type:
            </legend>

            <input
              id="article"
              v-model="guide.type"
              type="radio"
              value="article"
              class="pico-background-pumpkin-250"
            >
            <label for="article" class="label">Article</label>
            <input
              id="video"
              v-model="guide.type"
              type="radio"
              value="video"
              class="pico-background-pumpkin-250"
            >
            <label for="video" class="label">Video</label>
          </fieldset>
        </div>

        <div class="input-type">
          <fieldset class="fieldset">
            <legend class="legend">
              map
            </legend>
            <select
              id="map"
              v-model="guide.map"
              name="map"
              class="select"
            >
              <option value="" name="map" disabled>
                Select a map
              </option>
              <option value="exiles" name="map">
                The Exiled Lands
              </option>
              <option value="siptah" name="map">
                Isle of Siptah
              </option>
            </select>
          </fieldset>
        </div>

        <div class="input-type">
          <fieldset class="fieldset">
            <legend class="legend">
              category tags / topics:
            </legend>

            <input
              id="character"
              v-model="guide.categories"
              value="character"
              type="checkbox"
            >
            <label for="character" class="label">character</label>

            <input
              id="building"
              v-model="guide.categories"
              value="building"
              type="checkbox"
            >
            <label for="building" class="label">building</label><br>

            <input
              id="crafting"
              v-model="guide.categories"
              value="crafting"
              type="checkbox"
            >
            <label for="crafting" class="label">crafting</label>

            <input
              id="maps"
              v-model="guide.categories"
              value="maps"
              type="checkbox"
            >
            <label for="maps" class="label">maps</label>

            <input
              id="pets"
              v-model="guide.categories"
              value="pets"
              type="checkbox"
            >
            <label for="pets" class="label">pets</label><br>

            <input
              id="thralls"
              v-model="guide.categories"
              value="thralls"
              type="checkbox"
            >
            <label for="thralls" class="label">thralls</label>

            <input
              id="encounters"
              v-model="guide.categories"
              value="encounters"
              type="checkbox"
            >
            <label for="encounters" class="label">encounters</label>
          </fieldset>
        </div>
      </div>

      <!-- content, terms -->
      <div class="third">
        <div class="input-type">
          <label for="content" class="label">content if article / description for video</label>
          <textarea
            id="content"
            v-model="guide.content"
            name="content"
            cols="30"
            rows="15"
            class="textarea"
          />
          <div v-for="error of v$.guide.content.$errors" :key="error.$uid" class="input-errors">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
      </div>
    </div><br>

    <div class="terms">
      <input
        id="terms"
        v-model="v$.guide.terms.$model"
        true-value="yes"
        false-value="no"
        type="checkbox"
        class="accept"
      ><!-- true / flase  no value required (selected or not selected checkbox) -->
      <label for="terms" class="label">Terms and Conditions</label>
      <div v-for="error of v$.guide.terms.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
    </div><br>

    <!-- submit -->
    <div class="create">
      <button class="submit">
        Submit
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
    .create-guide {
      max-width: 1200px;
      margin: 3rem auto;

      .three-cols {
        display: grid;
        grid-template-columns: 360px 300px auto;
        gap: 3rem;

        .first, .second, .third  {
          border: 1px solid #f3f3f3;
          border-radius: 1.5%;
          .input-type {
              padding: 1rem;
              .fieldset {
                .legend {
                  font-size: smaller;
                  .input {

                    &[type=radio], &[type=checkbox] {
                      background-color: red;
                    }
                  }
                  .label {
                  font-family: serif;
                  }
                }
              }
              .label {
                  font-family: serif;
              }
              .title {
                  font-family: serif;
              }
          }
        }
      }
      .create, .terms {
          margin-top: 1rem;
        }

    }
</style>
