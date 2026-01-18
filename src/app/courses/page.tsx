"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { courses as coursesData } from "./data";

type Category = "All Courses" | "Full Stack" | "Data Science" | "Cloud & DevOps";

const categories: Category[] = [
  "All Courses",
  "Full Stack",
  "Data Science",
  "Cloud & DevOps",
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Courses");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All Courses") return coursesData;

    return coursesData.filter((c) => {
      if (activeCategory === "Cloud & DevOps") return c.category === "Cloud & DevOps";
      if (activeCategory === "Full Stack") return c.category === "Full Stack";
      if (activeCategory === "Data Science") return c.category === "Data Science";
      return true;
    });
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#4f46e5] to-[#db2777] bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl text-sm md:text-base">
            Pick the right course and start learning with practical training,
            expert guidance, and career support.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-sm font-bold text-gray-800 mb-3">
                All Courses
              </h3>

              <div className="space-y-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all border
                        ${
                          isActive
                            ? "bg-[#4f46e5] text-white border-[#4f46e5] shadow-sm"
                            : "bg-white text-gray-700 border-purple-100 hover:bg-purple-50 hover:border-purple-200"
                        }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Cards */}
          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-gray-900">
                      {course.title}
                    </h3>

                    <div className="mt-3 space-y-2 text-sm text-gray-600">
                      {course.overview.slice(0, 3).map((p, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-[#db2777]">★</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-5 inline-block bg-[#4f46e5] text-white px-5 py-2 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-sm text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="mt-6 bg-white border border-purple-100 rounded-2xl p-8 text-center text-gray-600">
                No courses found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
