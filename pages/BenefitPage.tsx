const BenefitPage = () => {
  return (
    <div className="grid md:grid-cols-2 md:mb-16 py-8 md:py-12 lg:py-16">
      <div className="bg-blue-100 py-16 px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Features of the Hacker House</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Brainstorming and Ideation Sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Workshops and Tutorials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Coaching and Mentorship from Move Experts, including the Sui Foundation's Head of Developer Relations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Access to Resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Networking Opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Solution Demonstrations</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50/30 py-16 px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Benefits for Participating Teams</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Access Mentorship & Coaching</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Engage with the Sui Foundation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Hands-On Learning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Showcase your skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>Connect with other developers & potential mentors and partners</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1 text-[20px]">•</span>
              <span>All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-500 text-[20px]">•</span>
              <span>Participants would build robust solutions using Sui and prepare for the Sui Overflow 2025 Hackathon, a virtual global competition with over $500,000 in combined prizes.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BenefitPage