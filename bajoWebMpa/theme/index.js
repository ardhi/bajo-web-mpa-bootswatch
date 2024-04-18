import component from './component.js'

const items = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal',
  'litera', 'lumen', 'lux', 'materia', 'minty', 'morph', 'pulse', 'quartz',
  'sandstone', 'simplex', 'sketchy', 'slate', 'solar', 'spacelab', 'superhero',
  'united', 'vapor', 'yeti', 'zephyr']

async function themes () {
  const { virtualDir } = this.bajoWebStatic.helper
  const { map, upperFirst } = this.bajo.helper._
  return map(items, name => {
    return {
      name,
      framework: 'bootstrap5',
      description: `Bootswatch 5.3 - ${upperFirst(name)}`,
      css: [
        `${virtualDir('bajoWebMpaBootswatch')}/dist/${name}/bootstrap.min.css`,
        `${virtualDir('bajoWebMpa')}/icons/font/bootstrap-icons.min.css`
      ],
      useFramework: ['script', 'icon', 'mapping'],
      component
    }
  })
}

export default themes
