const items = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal',
  'litera', 'lumen', 'lux', 'materia', 'minty', 'morph', 'pulse', 'quartz',
  'sandstone', 'simplex', 'sketchy', 'slate', 'solar', 'spacelab', 'superhero',
  'united', 'vapor', 'yeti', 'zephyr']

async function themes () {
  const { importPkg } = this.bajo.helper
  const { virtualDir } = this.bajoWebStatic.helper
  const { map, upperFirst } = await importPkg('lodash-es')
  return map(items, name => {
    return {
      name,
      framework: 'bootstrap5',
      description: `Bootswatch 5.3 - ${upperFirst(name)}`,
      script: `${virtualDir('bajoWebMpa')}/bs5/js/bootstrap.bundle.min.js`,
      css: [
        `${virtualDir('bajoWebMpaBootswatch')}/dist/${name}/bootstrap.min.css`,
        `${virtualDir('bajoWebMpa')}/icons/font/bootstrap-icons.min.css`
      ],
      useFramework: ['icon', 'mapping']
    }
  })
}

export default themes
