module.exports = {
  apps : [
    {
      name: "strapi-dev",
      script: "npm",
      args: "run develop"
    },
    {
      name: "strapi",
      script: "npm",
      args: "run start"
    }
  ]
}
