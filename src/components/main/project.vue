<template>
  <div class="row" id="projects" v-if="projects && projects.length">

    <div class="project col-lg-3" v-for="project in projects">
      <div class="project_title">
        <a :href="project.html_url" target="_blank" :title="project.name">{{ project.name }}</a>
        <span v-if="project.fork">(fork)</span>
      </div>
      <div class="project_author">
        <div class="row">
          <div class="project_author_image col-lg-4">
            <img :src="project.owner.avatar_url" :alt="project.owner.login" />
          </div>
          <div class="project_author_info col-lg-8">
            <p>
              <span>Author:</span>  <a :href="project.owner.url">{{ project.owner.login }}</a>
            </p>
            <p v-if="project.description && project.description.length">
              <span>Description:</span> {{ project.description }}
            </p>
            <p>
              <span>Total Stars:</span> {{ project.stargazers_count }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="error" v-if="errors && errors.length">
      <p v-for="error in errors">{{ error.message }}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'projects',
  data: () => {
    return {
      author: [],
      projects: [],
      errors: []
    }
  },
  created () {
    // do something after creating vue instance
    axios.get('https://api.github.com/users/suissa/repos')
      .then(response => {
        this.projects = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../static/sass/functions';

#projects {
  width: 100%;
}

.project {
  margin-bottom: pxtorem(16);
  &_title {
    background: lighten(colors(color, second), 20);
    border-top-left-radius: pxtorem(5);
    border-top-right-radius: pxtorem(5);
    font-size: pxtorem(25);
    padding: pxtorem(8) 0;
    text-align: center;
    a {
      color: colors(color, text);
      display: block;
      padding: pxtorem(12) 0;
      text-decoration: none;
    }
  }
  &_author {
    background: colors(color, second);
    padding: pxtorem(12) pxtorem(12);
    &_image {
      img {
        max-width: 100%;
        width: 100%;
      }
    }
    &_info {
      p {
        margin-bottom: pxtorem(16);
        padding: pxtorem(12) 0;
      }
      span {
        font-weight: bold;
      }
    }
  }
}
</style>
