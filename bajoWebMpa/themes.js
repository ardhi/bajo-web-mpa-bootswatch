const items = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal',
  'litera', 'lumen', 'lux', 'materia', 'minty', 'morph', 'pulse', 'quartz',
  'sandstone', 'simplex', 'sketchy', 'slate', 'solar', 'spacelab', 'superhero',
  'united', 'vapor', 'yeti', 'zephyr']

async function themes () {
  const { importPkg, getConfig, readJson } = this.bajo.helper
  const { map, upperFirst } = await importPkg('lodash-es')
  const cfg = getConfig('bajoWebMpaBootswatch', { full: true })
  const cfgBs = getConfig('bajoWebMpaBootstrap', { full: true })
  const cfgStat = getConfig('bajoWebStatic', { full: true })
  const virts = readJson(`${cfg.dir}/bajoWebStatic/virtuals.json`)
  const virtsBs = readJson(`${cfgBs.dir}/bajoWebStatic/virtuals.json`)
  return map(items, name => {
    return {
      name,
      description: `Bootswatch 5.3 - ${upperFirst(name)}`,
      script: `/${cfgStat.prefix}/${cfgStat.virtualsPrefix}/${cfgBs.alias}/${virtsBs[0].prefix}/js/bootstrap.bundle.min.js`,
      css: `/${cfgStat.prefix}/${cfgStat.virtualsPrefix}/${cfg.alias}/${virts[0].prefix}/${name}/bootstrap.min.css`
    }
  })
}

export default themes
