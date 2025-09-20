import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Moatez Borji</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/assest/Gemini_Generated_Image_3qven13qven13qve.png"
                  alt="Moatez Borji"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Moatez Borji</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Ariana, Tunisia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+216 92009378</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>borji.moatez@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a href="https://www.linkedin.com/in/moatez-borji-b42927274/" target="_blank" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/borgimoatez123" target="_blank" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer Internship</h3>
                  <p className="text-blue-600 font-medium">Bee Coders</p>
                  <p className="text-gray-600">Tunis</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">07-09/2025</span>
              </div>
              <p className="text-gray-700 mb-3">
                 <strong>Technologies:</strong> MERN Stack, Flutter, Google Auth, ESP32, MQTT
               </p>
               <p className="text-gray-700">
                 Development of a demo educational platform for schools with MERN Stack website, Flutter mobile application, and IoT system using ESP32 with MQTT protocol and Google authentication services.
               </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                   <h3 className="text-xl font-semibold text-gray-900">End of Studies Internship – Full Stack Developer</h3>
                   <p className="text-green-600 font-medium">Sierra Bravo Intelligence</p>
                   <p className="text-gray-600">Tunis</p>
                 </div>
                 <span className="text-gray-500 mt-2 md:mt-0">02-06/2024</span>
               </div>
               <p className="text-gray-700 mb-3">
                 <strong>Technologies:</strong> React Native, React.js, Express.js, Node.js, MongoDB, Google Maps API
               </p>
               <p className="text-gray-700">
                 Development of a delivery platform with mobile applications for users and delivery drivers, admin website, and Google Maps API integration using React Native as cross-platform technology.
               </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                   <h3 className="text-xl font-semibold text-gray-900">MERN Stack Developer Internship</h3>
                   <p className="text-purple-600 font-medium">Bee Coders</p>
                   <p className="text-gray-600">Ariana</p>
                 </div>
                 <span className="text-gray-500 mt-2 md:mt-0">07-09/2023</span>
               </div>
               <p className="text-gray-700 mb-3">
                 <strong>Technologies:</strong> React.js, Express.js, Node.js, MongoDB, Google Auth
               </p>
               <p className="text-gray-700">
                 Development of a demo social network web application focused on job search and freelance opportunities, using Google authentication services.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                   <h3 className="text-xl font-semibold text-gray-900">Engineering Degree</h3>
                   <p className="text-blue-600 font-medium">Private Higher School of Engineering and Technology (ESPRIT)</p>
                   <p className="text-gray-600">Ariana, Tunisia</p>
                 </div>
                 <span className="text-gray-500 mt-2 md:mt-0">09/2024 - Present</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Licence en Génie Logiciel</h3>
                  <p className="text-green-600 font-medium">Institut Supérieur des Langues Appliquées et Informatique (ISLAI)</p>
                  <p className="text-gray-600">Béja, Tunisie</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">12/09/2021 - 24/06/2024</span>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
                 <div className="flex flex-wrap justify-center gap-2">
                   {['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'PHP'].map((skill) => (
                     <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
               
               <div className="text-center">
                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
                 <div className="flex flex-wrap justify-center gap-2">
                   {['React.js', 'Next.js', 'React Native', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                     <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
               
               <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Express.js', 'Node.js', 'Symfony', 'MongoDB', 'MySQL', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Others</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Git', 'Docker', 'LaTeX', 'ESP32', 'MQTT', 'Google Auth'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Langues</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">Arabe</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">Français</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">Anglais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Volunteering Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hackathon Youth Speak</h3>
                <p className="text-gray-700 mb-6">Local and national winner for a mobile app (FlutterFlow).</p>
                
                {/* Image Carousel */}
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/assest/youth.jpg"
                        alt="Youth Speak Hackathon Event 1"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/assest/youth1.jpg"
                        alt="Youth Speak Hackathon Event 2"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteering</h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Community Manager</h3>
                    <p className="text-blue-600 font-medium">Enactus Limitless</p>
                    <p className="text-gray-600">Béja</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">2021-2023</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Social media management. Won the <strong>Limitl&apos;ESS Challenge 2023</strong>.
                </p>
                
                {/* Image Carousel */}
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/assest/enactus.jpg"
                        alt="Enactus Limitless Event 1"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/assest/enactus 2.jpg"
                        alt="Enactus Limitless Event 2"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                 <p className="text-xl mb-8 text-gray-300">
                   Interested in collaboration? Feel free to contact me!
                 </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:borji.moatez@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="tel:+21692009378" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              Phone
            </a>
            <a href="https://www.linkedin.com/in/moatez-borji-b42927274/" target="_blank" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Moatez Borji. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
