const Issues = () => {
    const issues = [
        "ADHD",
        "Abuse",
        "Addictions",
        "Affairs and betrayals",
        "Anger",
        "Anxiety",
        "Attachments difficulties",
        "Autism Spectrum Disorder (ASD)",
        "Bereavement",
        "Burnout",
        "Cancer",
        "Childhood issues",
        "Chronic health conditions",
        "Club drug dependency",
        "Depression and low mood",
        "Divorce",
        "Eating disorders",
        "Emotional abuse",
        "Existential crisis",
        "Family issues",
        "Feeling sad",
        "Gambling",
        "Health anxiety",
        "HIV",
        "Interpersonal difficulties",
        "Loneliness",
        "Low self confidence",
        "Low self esteem",
        "Menopause issues",
        "Obsessive Compulsive Disorder (OCD)",
        "Obsessive thoughts",
        "Panic attacks",
        "Past traumatic stress disorder (PTSD)",
        "Relationship difficulties",
        "Seasonal Affective Disorder",
        "Self-development",
        "Separation",
        "Sexuality difficulties",
        "Sleep difficulties",
        "Social anxiety",
        "Stress",
        "Substance misuse",
        "Trauma",
        "Trauma bonds",
        "Women's issues",
        "Work-related stress"
    ];


    return (
        <section className="p-5 lg:py-10 lg:px-[100px] bg-[url('/issues-bg.svg')] w-full bg-cover bg-center bg-no-repeat">
            <div className=' font-canela text-3xl md:text-5xl font-extrabold text-center text-[#C99D85]'>Issues I treat</div>
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