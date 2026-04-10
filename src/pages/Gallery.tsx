import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Gallery() {
  const images = [
    {
      before: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/656788084_17872507473580441_119953236457349053_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzg2NDg1ODc0MzcyOTkzNDIzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjQ4MHgzNjAuc2RyLkMzIn0%3D&_nc_ohc=MBnEorvPPdMQ7kNvwFyC54i&_nc_oc=AdqaAoFZH9MjqF0aR0KpdPFMiaYuLzbs0QguqDBEvxCI99kxOYTtKycmNYWcy8OoNtI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=1j6fLN3Iv6Xf4_U2zyYJQw&_nc_ss=7a32e&oh=00_Af3drXHGppb3nlNPYQy9ACc-rtJj7eZYygiBvW018zfY9g&oe=69DF5553',
      after: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/660975767_17872508616580441_4163450289663278320_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg2NDg2NzY4NjcyNDIxNjYxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNDJ4MTY1Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=xC4unvHFs70Q7kNvwFAZXi0&_nc_oc=AdoihpUiElo3kZS0GAdbj9YlyaXU3mQmcmAnXTOQdcwuGFxAXWF4zXihDCfa_rkU2xs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=1j6fLN3Iv6Xf4_U2zyYJQw&_nc_ss=7a32e&oh=00_Af2r6uY0puzxFjRWOonqohLPIq60czZkNph9Jy6-1dWLXw&oe=69DF5892',
      title: 'Interior Detail',
      desc: 'Deep clean interior, vacuum, and surface restoration.'
    },
    {
      before: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/660699085_17872507818580441_8476731871249452501_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzg2NDg2MTMyMDM1Nzk1OTg4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNDJ4MTY1Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=9e3WJjdg2o0Q7kNvwGjQZf8&_nc_oc=Adq0Jd7srXpznNOF4dKbzbnsAbgEwOB3M9JLZBXkhuOeC4e32DCgeo7dXSfOg9XObBg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=1j6fLN3Iv6Xf4_U2zyYJQw&_nc_ss=7a32e&oh=00_Af2Uv4w-bBYwG9JIqsQHkDY09QCt9V1yf83aGdU6oIwgwQ&oe=69DF3A66',
      after: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/649750414_17868679227580441_3120462667805151853_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzg1MTA2MjQ1MTExNTQ5OTMwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MTU2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=1FPnqPBm-2wQ7kNvwEJWNU8&_nc_oc=AdqCldpwovTEu3bqbj2QTP-9vk6r-nerdPu1K2F6pm9DsBRGrtUHB2bq7PSJ4UAoYxU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=1j6fLN3Iv6Xf4_U2zyYJQw&_nc_ss=7a32e&oh=00_Af2KsCq42R9zOFsfC6eC2C8gGx7E4rUThI4tK387eejARg&oe=69DF579A',
      title: 'Exterior Detail',
      desc: 'Meticulous hand wash and shine finish.'
    },
    {
      before: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/649800339_17868679311580441_8915286467802027422_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg1MTA2Mjg3MDcyMjAzMzg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MTU2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=uA9CrvZ3NhUQ7kNvwERcINd&_nc_oc=Adp7P3OAhjtvhsZKjCKpyaQd5VLerRYKnRd6HkAYvKTPahwGKQRCvZjyRJ6dHt0FHQw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=1j6fLN3Iv6Xf4_U2zyYJQw&_nc_ss=7a32e&oh=00_Af29HIhYGWs_t6xQiLSiCWxe_LnRBeAgc2M70-X8GQ0k4g&oe=69DF5350',
      after: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/649962582_17868679161580441_1304374094555883050_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzg1MTA2MTgxMTA0Nzg5MjcyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MTU2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tLjbI7dQxq4Q7gegR&_nc_oc=AdrdfS5Bf125T33ucH_JsGPqn5Q-FCKqpRS_68gIzhIpKftMGyw-qONvsKkHMAvXIY8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=1j6fLN3Iv6Xf4_U2zyYJQw&_nc_ss=7a32e&oh=00_Af2M6qTMGTb3aadI4GLcUt0SKjHiEHTXtcJisGQf4iTdUw&oe=69DF488A',
      title: 'Full Detail',
      desc: 'Complete interior and exterior refresh.'
    }
  ];

  return (
    <div className="flex flex-col w-full pt-10 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <motion.div {...fadeIn} className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">The Gallery.</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Real results from Magic Valley. See the transformation from daily wear-and-tear to showroom clean.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-24">
          {images.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-neutral-500">{item.desc}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Before */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    Before
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img 
                      src={item.before} 
                      alt={`Before ${item.title}`} 
                      className="w-full h-full object-cover grayscale-[30%] contrast-75"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                {/* After */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10 bg-white text-neutral-900 px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                    After
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img 
                      src={item.after} 
                      alt={`After ${item.title}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Want these results for your vehicle?</h2>
          <a 
            href="/contact" 
            className="inline-block bg-neutral-900 text-white px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            Book Your Detail
          </a>
        </motion.div>
      </section>
    </div>
  );
}
