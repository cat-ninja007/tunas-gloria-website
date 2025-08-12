import Image from 'next/image'
import Hero from "@/components/global/Hero";



export const metadata = {
  title: 'Admission | Tunas Gloria',
  description: 'How to enrol your child at Tunas Gloria Christian School.',
}

export default function AdmissionPage() {
  const docs = [
    { icon: '📄', label: 'Birth Certificate' },
    { icon: '👨‍👩‍👧', label: 'Kartu Keluarga' },
    { icon: '🖼️', label: '2 new photos 3×4' },
    { icon: '📊', label: 'Latest report card' },
  ]

  const ages = [
    { level: 'K1', minAge: 3 },
    { level: 'K2', minAge: 4 },
    { level: 'K3', minAge: 5 },
    { level: 'Grade 1', minAge: 6 },
    { level: 'Grade 2', minAge: 7 },
    { level: 'Grade 3', minAge: 8 },
    { level: 'Grade 4', minAge: 9 },
    { level: 'Grade 5', minAge: 10 },
    { level: 'Grade 6', minAge: 11 },
  ]

  return (
    <>
      {/* SECTION 1 : HERO */}
      <Hero
        title="Admission"
        subtitle="We welcome you to be part of the Tunas Gloria community. Enrol now!."
        img="/hero/admission.jpg"
      />

      {/* SECTION 2 : REGISTRATION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Registration Process
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Once you have completed the online registration, you will be informed of the entrance-test schedule by our admissions office. Tests can be held on campus or online.
              </p>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Documents to Prepare
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {docs.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg"
                  >
                    <span className="text-2xl">{d.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {d.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Prefer hard copies? You may submit them in person at the campus office.
              </p>
            </div>

            {/* Age / Grade table */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Entry Requirements
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                        Grade / Level
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                        Minimum age by 30 Sep
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {ages.map((row) => (
                      <tr key={row.level}>
                        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                          {row.level}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {row.minAge} years old
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="/admission/registration"
                className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                Start Online Registration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : ENTRANCE TEST */}
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entrance Test Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kindergarten */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gray-200">
                <Image
                  src="/admission/kindergarten-reg.png"      
                  alt="Kindergarten Entrance Test"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kindergarten</h3>
              <p className="text-sm text-gray-700">
                K1-K3: Observation & Parents Interview
              </p>
            </div>

            {/* Primary */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gray-200">
                <Image
                  src="/admission/primary-reg.png"      
                  alt="Kindergarten Entrance Test"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Primary</h3>
              <p className="text-sm text-gray-700">
                Grade&nbsp;1: Psycho test & Interview<br />
                Grade&nbsp;2-6: + Math, English, Bahasa
              </p>
            </div>

            {/* Junior High */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gray-200">
                <Image
                  src="/admission/junior-reg.png"      
                  alt="Kindergarten Entrance Test"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Junior High</h3>
              <p className="text-sm text-gray-700">
                Grade&nbsp;7-9: Psycho, Math, English, Bahasa + Interview
              </p>
            </div>

            {/* Senior High */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gray-200">
                <Image
                  src="/admission/senior-reg.png"      
                  alt="Kindergarten Entrance Test"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Senior High</h3>
              <p className="text-sm text-gray-700">
                Grade&nbsp;10-12: Same as Junior + Interview
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}