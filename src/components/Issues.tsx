const Issues = () => {
    const issues = [
        "Abuse",
        "ADHD",
        "Addictions",
        "Affairs and betrayals",
        "Anxiety",
        "Anger",
        "Attachments difficulties",
        "Autism Spectrum Disorder (ASD)",
        "Bereavement",
        "Burnout",
        "Cancer",
        "Chronic health conditions",
        "Childhood issues",
        "Club drug dependency",
        "Depression and low mood",
        "Divorce",
        "Eating disorders",
        "Existential crisis",
        "Emotional abuse",
        "Feeling sad",
        "Family issues",
        "Gambling",
        "Health anxiety",
        "HIV",
        "Interpersonal difficulties",
        "Loneliness",
        "Low self confidence",
        "Low self esteem",
        "Obsessive thoughts",
        "Obsessive Compulsive Disorder (OCD)",
        "Men’s issues",
        "Panic attacks",
        "Past traumatic stress disorder (PTSD)",
        "Relationship difficulties",
        "Seasonal Affective Disorder",
        "Separation",
        "Self-development",
        "Sexuality difficulties",
        "Sleep difficulties",
        "Substance misuse",
        "Social anxiety",
        "Stress",
        "Trauma",
        "Trauma bonds",
        "Women’s issues",
        "Work-related stress"
    ];

    return (
        <section className="p-5 lg:py-10 lg:px-[100px] bg-[url('/issues-bg.svg')] w-full bg-cover bg-center bg-no-repeat">
            <div className=' font-canela text-3xl md:text-5xl font-extrabold text-center text-[#C99D85]'>Issues that we treat</div>
            <div className='mt-11 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {issues.map((issue, i) => (
                    <div key={i} className='border-b flex h-14 items-start'>
                        <p className='text-xl text-[#C99D85]'>{issue}</p>
                    </div>
                ))}
            </div>
            <div className="mt-11 flex flex-col gap-6">
                <p className="text-[#666666] text-lg">
                    Can&apos;t see exactly what you are looking for help with? Don&apos;t worry anything that is causing you distress you can bring to therapy, and I would still see this as important.
                </p>
            </div>
        </section >
    )
}

export default Issues