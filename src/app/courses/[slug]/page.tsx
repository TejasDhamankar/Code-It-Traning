import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { getCourseBySlug } from "../data";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // ✅ unwrap params Promise
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">Course not found ❌</h2>
          <p className="text-gray-600 mt-2">
            Your slug is: <b>{slug}</b>
          </p>

          <Link
            href="/courses"
            className="inline-block mt-4 bg-[#4f46e5] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#4338ca] transition-all"
          >
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/courses"
            className="text-sm font-semibold text-[#4f46e5] hover:underline"
          >
            ← Back to Courses
          </Link>

          <button className="bg-[#4f46e5] text-white px-5 py-2 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-sm text-sm">
            Book Free Demo
          </button>
        </div>

        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {course.title}
              </h1>

              <p className="mt-3 text-gray-600 text-sm md:text-base">
                Become industry-ready with structured learning, real projects,
                and expert guidance.
              </p>

              <div className="mt-6">
                <h2 className="text-lg font-extrabold text-gray-900">
                  Course Overview
                </h2>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  {course.overview.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-green-600 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-extrabold text-gray-900">
                  Why Should You Join
                </h2>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  {course.whyChoose.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-[#db2777] font-bold">★</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#4f46e5] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-sm text-sm">
                  Book Free Demo
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Syllabus */}
        <div className="mt-8 bg-white rounded-3xl shadow-sm border border-purple-100 p-8">
          <h2 className="text-xl font-extrabold text-gray-900">
            Syllabus & Mode
          </h2>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {course.syllabus.map((topic, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-4 rounded-2xl border border-purple-100 bg-purple-50/40"
              >
                <span className="mt-1 text-[#4f46e5] font-bold">✓</span>
                <p className="text-sm font-medium text-gray-700">{topic}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-[#4f46e5] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-sm text-sm">
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
