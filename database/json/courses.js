const config = require('../../config/index')
const db = require('../index')

const run = async () => {
  try {
    const cat = [
      {
        name:
      'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
        url:
      'http://shop-pro.jp/auctor/gravida/sem/praesent/id/massa.aspx?at=amet&velit=eros&vivamus=suspendisse&vel=accumsan&nulla=tortor&eget=quis&eros=turpis&elementum=sed&pellentesque=ante&quisque=vivamus&porta=tortor&volutpat=duis&erat=mattis&quisque=egestas&erat=metus&eros=aenean&viverra=fermentum&eget=donec&congue=ut&eget=mauris&semper=eget&rutrum=massa&nulla=tempor&nunc=convallis&purus=nulla&phasellus=neque&in=libero&felis=convallis&donec=eget',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso Definitivo de HTML y CSS',
        url:
      'http://networksolutions.com/justo/sollicitudin/ut/suscipit/a.png?cursus=in&id=hac&turpis=habitasse&integer=platea&aliquet=dictumst&massa=morbi&id=vestibulum&lobortis=velit&convallis=id&tortor=pretium&risus=iaculis&dapibus=diam&augue=erat&vel=fermentum&accumsan=justo&tellus=nec&nisi=condimentum&eu=neque&orci=sapien&mauris=placerat&lacinia=ante&sapien=nulla&quis=justo&libero=aliquam&nullam=quis&sit=turpis&amet=eget&turpis=elit&elementum=sodales&ligula=scelerisque&vehicula=mauris&consequat=sit&morbi=amet&a=eros&ipsum=suspendisse&integer=accumsan&a=tortor&nibh=quis&in=turpis&quis=sed&justo=ante&maecenas=vivamus&rhoncus=tortor&aliquam=duis&lacus=mattis&morbi=egestas&quis=metus&tortor=aenean&id=fermentum&nulla=donec&ultrices=ut&aliquet=mauris&maecenas=eget&leo=massa&odio=tempor&condimentum=convallis&id=nulla&luctus=neque&nec=libero&molestie=convallis&sed=eget&justo=eleifend&pellentesque=luctus&viverra=ultricies&pede=eu&ac=nibh&diam=quisque&cras=id&pellentesque=justo&volutpat=sit&dui=amet&maecenas=sapien&tristique=dignissim&est=vestibulum&et=vestibulum&tempus=ante',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso Profesional de Git y GitHub',
        url:
      'https://tiny.cc/neque/duis/bibendum.aspx?in=a&tempus=feugiat&sit=et&amet=eros&sem=vestibulum&fusce=ac',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso Práctico de HTML y CSS',
        url:
      'http://mashable.com/quis/odio/consequat/varius/integer/ac.json?nonummy=amet&maecenas=sem&tincidunt=fusce&lacus=consequat&at=nulla&velit=nisl&vivamus=nunc&vel=nisl&nulla=duis&eget=bibendum&eros=felis&elementum=sed&pellentesque=interdum&quisque=venenatis&porta=turpis&volutpat=enim&erat=blandit&quisque=mi&erat=in&eros=porttitor&viverra=pede&eget=justo&congue=eu&eget=massa&semper=donec&rutrum=dapibus&nulla=duis&nunc=at&purus=velit&phasellus=eu&in=est&felis=congue&donec=elementum&semper=in&sapien=hac&a=habitasse&libero=platea&nam=dictumst&dui=morbi&proin=vestibulum&leo=velit&odio=id&porttitor=pretium&id=iaculis&consequat=diam&in=erat&consequat=fermentum&ut=justo&nulla=nec&sed=condimentum&accumsan=neque&felis=sapien&ut=placerat&at=ante&dolor=nulla&quis=justo&odio=aliquam&consequat=quis&varius=turpis&integer=eget&ac=elit&leo=sodales&pellentesque=scelerisque&ultrices=mauris',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso de Single Page Application con JavaScript Vanilla',
        url:
      'https://prweb.com/quam/nec/dui/luctus.js?ante=ante&ipsum=nulla&primis=justo&in=aliquam&faucibus=quis&orci=turpis&luctus=eget&et=elit&ultrices=sodales&posuere=scelerisque&cubilia=mauris&curae=sit&duis=amet&faucibus=eros',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso de Optimización Web',
        url:
      'http://comcast.net/nulla/pede/ullamcorper/augue/a.js?hendrerit=duis&at=at&vulputate=velit&vitae=eu&nisl=est&aenean=congue&lectus=elementum&pellentesque=in&eget=hac&nunc=habitasse&donec=platea&quis=dictumst&orci=morbi&eget=vestibulum&orci=velit&vehicula=id&condimentum=pretium&curabitur=iaculis&in=diam&libero=erat&ut=fermentum&massa=justo&volutpat=nec&convallis=condimentum&morbi=neque&odio=sapien&odio=placerat&elementum=ante&eu=nulla&interdum=justo&eu=aliquam&tincidunt=quis&in=turpis&leo=eget&maecenas=elit&pulvinar=sodales&lobortis=scelerisque&est=mauris&phasellus=sit&sit=amet&amet=eros&erat=suspendisse&nulla=accumsan&tempus=tortor&vivamus=quis&in=turpis&felis=sed&eu=ante&sapien=vivamus&cursus=tortor&vestibulum=duis&proin=mattis&eu=egestas&mi=metus&nulla=aenean&ac=fermentum&enim=donec&in=ut&tempor=mauris&turpis=eget&nec=massa&euismod=tempor&scelerisque=convallis&quam=nulla&turpis=neque',
        category: 1,
        difficulty: 'medium'
      },
      {
        name: 'Curso de Webpack',
        url:
      'http://google.pl/libero/rutrum/ac/lobortis.jpg?lorem=phasellus&id=id&ligula=sapien&suspendisse=in&ornare=sapien&consequat=iaculis&lectus=congue&in=vivamus&est=metus&risus=arcu&auctor=adipiscing&sed=molestie&tristique=hendrerit&in=at&tempus=vulputate&sit=vitae&amet=nisl&sem=aenean&fusce=lectus&consequat=pellentesque&nulla=eget&nisl=nunc&nunc=donec&nisl=quis&duis=orci&bibendum=eget&felis=orci&sed=vehicula&interdum=condimentum&venenatis=curabitur&turpis=in&enim=libero&blandit=ut&mi=massa&in=volutpat&porttitor=convallis&pede=morbi&justo=odio&eu=odio&massa=elementum&donec=eu&dapibus=interdum&duis=eu&at=tincidunt&velit=in&eu=leo&est=maecenas&congue=pulvinar&elementum=lobortis&in=est&hac=phasellus&habitasse=sit&platea=amet&dictumst=erat&morbi=nulla&vestibulum=tempus&velit=vivamus&id=in&pretium=felis&iaculis=eu&diam=sapien&erat=cursus&fermentum=vestibulum&justo=proin&nec=eu&condimentum=mi&neque=nulla&sapien=ac&placerat=enim&ante=in&nulla=tempor&justo=turpis&aliquam=nec&quis=euismod&turpis=scelerisque&eget=quam&elit=turpis&sodales=adipiscing&scelerisque=lorem&mauris=vitae&sit=mattis&amet=nibh&eros=ligula&suspendisse=nec&accumsan=sem&tortor=duis&quis=aliquam',
        category: 1,
        difficulty: 'medium'
      },
      {
        name: 'Curso de React.js',
        url:
      'https://hubpages.com/pretium/iaculis.js?maecenas=nullam&rhoncus=orci&aliquam=pede&lacus=venenatis&morbi=non&quis=sodales&tortor=sed&id=tincidunt&nulla=eu&ultrices=felis&aliquet=fusce&maecenas=posuere&leo=felis&odio=sed&condimentum=lacus&id=morbi&luctus=sem&nec=mauris&molestie=laoreet&sed=ut&justo=rhoncus&pellentesque=aliquet&viverra=pulvinar&pede=sed&ac=nisl&diam=nunc&cras=rhoncus&pellentesque=dui&volutpat=vel&dui=sem&maecenas=sed&tristique=sagittis&est=nam&et=congue&tempus=risus&semper=semper&est=porta&quam=volutpat&pharetra=quam&magna=pede&ac=lobortis&consequat=ligula&metus=sit&sapien=amet&ut=eleifend&nunc=pede&vestibulum=libero&ante=quis&ipsum=orci&primis=nullam&in=molestie&faucibus=nibh&orci=in&luctus=lectus&et=pellentesque&ultrices=at&posuere=nulla&cubilia=suspendisse&curae=potenti&mauris=cras&viverra=in&diam=purus&vitae=eu&quam=magna&suspendisse=vulputate&potenti=luctus&nullam=cum&porttitor=sociis&lacus=natoque&at=penatibus&turpis=et&donec=magnis&posuere=dis&metus=parturient&vitae=montes&ipsum=nascetur&aliquam=ridiculus&non=mus&mauris=vivamus&morbi=vestibulum&non=sagittis&lectus=sapien&aliquam=cum&sit=sociis&amet=natoque&diam=penatibus&in=et&magna=magnis&bibendum=dis',
        category: 1,
        difficulty: 'medium'
      },
      {
        name: 'Curso de React Avanzado',
        url:
      'https://google.co.uk/vitae/quam/suspendisse/potenti/nullam/porttitor.jpg?tincidunt=molestie&eu=hendrerit&felis=at&fusce=vulputate&posuere=vitae&felis=nisl&sed=aenean&lacus=lectus&morbi=pellentesque&sem=eget&mauris=nunc&laoreet=donec&ut=quis&rhoncus=orci&aliquet=eget&pulvinar=orci&sed=vehicula&nisl=condimentum&nunc=curabitur&rhoncus=in&dui=libero&vel=ut&sem=massa&sed=volutpat&sagittis=convallis&nam=morbi&congue=odio&risus=odio&semper=elementum&porta=eu&volutpat=interdum&quam=eu&pede=tincidunt&lobortis=in&ligula=leo&sit=maecenas&amet=pulvinar&eleifend=lobortis&pede=est&libero=phasellus&quis=sit',
        category: 1,
        difficulty: 'easy'
      },
      {
        name: 'Curso Profesional de React Hooks',
        url:
      'http://ifeng.com/nec/nisi/volutpat/eleifend/donec.jsp?natoque=tincidunt&penatibus=eu&et=felis&magnis=fusce&dis=posuere',
        category: 1,
        difficulty: 'easy'
      },
      {
        name: 'Curso de Responsive Design: Maquetación Mobile First',
        url:
      'https://techcrunch.com/ut/massa.aspx?ligula=iaculis&pellentesque=congue&ultrices=vivamus&phasellus=metus&id=arcu&sapien=adipiscing&in=molestie&sapien=hendrerit&iaculis=at&congue=vulputate&vivamus=vitae&metus=nisl&arcu=aenean&adipiscing=lectus&molestie=pellentesque&hendrerit=eget&at=nunc&vulputate=donec&vitae=quis&nisl=orci&aenean=eget&lectus=orci&pellentesque=vehicula&eget=condimentum&nunc=curabitur&donec=in&quis=libero&orci=ut&eget=massa&orci=volutpat&vehicula=convallis&condimentum=morbi&curabitur=odio&in=odio&libero=elementum&ut=eu&massa=interdum&volutpat=eu&convallis=tincidunt&morbi=in&odio=leo&odio=maecenas&elementum=pulvinar&eu=lobortis&interdum=est&eu=phasellus&tincidunt=sit&in=amet&leo=erat&maecenas=nulla&pulvinar=tempus&lobortis=vivamus&est=in&phasellus=felis&sit=eu&amet=sapien&erat=cursus&nulla=vestibulum&tempus=proin&vivamus=eu&in=mi&felis=nulla&eu=ac&sapien=enim&cursus=in&vestibulum=tempor&proin=turpis&eu=nec&mi=euismod&nulla=scelerisque&ac=quam&enim=turpis&in=adipiscing&tempor=lorem&turpis=vitae',
        category: 1,
        difficulty: 'hard'
      },
      {
        name:
      'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
        url:
      'https://t-online.de/odio/curabitur/convallis/duis.aspx?vulputate=odio&vitae=in&nisl=hac&aenean=habitasse&lectus=platea&pellentesque=dictumst&eget=maecenas&nunc=ut&donec=massa&quis=quis&orci=augue&eget=luctus&orci=tincidunt&vehicula=nulla&condimentum=mollis&curabitur=molestie&in=lorem&libero=quisque&ut=ut&massa=erat&volutpat=curabitur&convallis=gravida&morbi=nisi&odio=at&odio=nibh&elementum=in&eu=hac&interdum=habitasse&eu=platea&tincidunt=dictumst&in=aliquam&leo=augue&maecenas=quam&pulvinar=sollicitudin&lobortis=vitae&est=consectetuer&phasellus=eget&sit=rutrum&amet=at&erat=lorem&nulla=integer&tempus=tincidunt&vivamus=ante&in=vel&felis=ipsum&eu=praesent&sapien=blandit&cursus=lacinia&vestibulum=erat&proin=vestibulum&eu=sed&mi=magna&nulla=at&ac=nunc&enim=commodo&in=placerat&tempor=praesent&turpis=blandit&nec=nam&euismod=nulla&scelerisque=integer&quam=pede&turpis=justo&adipiscing=lacinia&lorem=eget&vitae=tincidunt',
        category: 1,
        difficulty: 'medium'
      }
    ]
    const { courses } = await db(config())
    for (const element in cat) {
      const el = cat[element]
      const category = await courses.createOrUpdate({
        name: el.name,
        url: el.url,
        difficulty: el.difficulty,
        categoryId: el.category

      })
      console.log(category)
      console.log('-----')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
