<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const repos = ref([])

const fetchRepos = () => {
  axios.get('https://api.github.com/users/EliasLov/repos').then((response) => {
    repos.value = response.data
  })
}

onMounted(fetchRepos)
</script>

<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6"></section>
    <div class="container">
      <br />

      <div class="table-container">
        <h3>Github Repositories</h3>
        <hr />
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Language</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo.id">
              <td>{{ repo.name }}</td>
              <td>
                <a :href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
              </td>
              <td>{{ repo.language }}</td>
              <td>{{ repo.owner.login }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.table-container {
  overflow-x: auto;
  background-color: rgb(218, 218, 218);
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.table th,
.table td {
  padding: 0.5rem;
  text-align: left;
  vertical-align: middle;
}

.table thead th {
  background-color: rgb(218, 218, 218);
  font-weight: bold;
}

.table tbody tr:hover {
  background-color: #b4b4b4;
}
</style>
