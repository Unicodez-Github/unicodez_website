const stats = [
    {
        id: 0, stat: "2019", text: "Founded"
    },
    {
        id: 1, stat: "30+", text: "Projects Completed"
    },
    {
        id: 2, stat: "100+", text: "Experts"
    },
    {
        id: 3, stat: "15+", text: "Years of Development Expertise"
    },
]

const HeroStats = () => {
    return (
        <div className="w-full bg-unicodez-gray pt-4 pb-10" data-aos="fade-up">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-gray-600">
                    {stats.map((stat) => {
                        return (
                            <div className="flex flex-col space-y-4 justify-center items-center pt-12 pb-6" key={stat.id}>
                                <h3 className="text-4xl font-bold text-[#FAB041]">{stat.stat}</h3>
                                <span className="text-[#7B8292] text-base uppercase text-center">{stat.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeroStats;