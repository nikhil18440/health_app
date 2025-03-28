import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ADHD = () => {
  return (
    <View>
      <Text><b>Attention-Deficit/Hyperactivity Disorder (ADHD)</b> is a neurodevelopmental disorder that affects children, adolescents, and adults. It is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily life, learning, and relationships.




Symptoms of ADHD:

ADHD symptoms are generally divided into two categories: inattention and hyperactivity-impulsivity. A person may exhibit symptoms from one or both categories.


<Text style={styles.textCntnt}>1. Inattention:
Difficulty focusing on tasks or activities

Easily distracted by external stimuli

Frequently making careless mistakes

Difficulty organizing tasks and managing time

Often losing items like keys, books, or tools

Forgetfulness in daily activities

Avoidance of tasks that require sustained mental effort
</Text>


<Text style={styles.textCntnt}>2. Hyperactivity and Impulsivity:
Constant fidgeting or restlessness

Difficulty remaining seated when required

Excessive talking or interrupting others

Difficulty waiting for one's turn

Acting without thinking, making quick decisions without considering consequences

Difficulty playing quietly or engaging in calm activities

A sense of inner restlessness
</Text>




<Text style={styles.textCntnt}>Measures to Manage and Treat ADHD:</Text>

<Text> style={styles.textCntnt}1. Professional Help:
Behavioral Therapy: Helps develop organizational skills, emotional regulation, and coping strategies.

Cognitive Behavioral Therapy (CBT): Addresses negative thought patterns and impulsivity.

Medication:

Stimulants: Such as methylphenidate (Ritalin) or amphetamine-based medications (Adderall).

Non-Stimulants: Atomoxetine or certain antidepressants for those who don't respond to stimulants.
</Text>



<Text style={styles.textCntnt}>2. Lifestyle Changes:
Structured Routine: Establishing daily schedules and clear expectations.

Organization Tools: Using planners, timers, and checklists to stay organized.

Healthy Lifestyle: Regular exercise, balanced nutrition, and sufficient sleep.

Minimizing Distractions: Creating a quiet, clutter-free workspace.

Mindfulness and Relaxation: Practicing mindfulness techniques to improve focus and reduce stress.
</Text>


<Text style={styles.textCntnt}>3. Support Systems:
Parental Training: For children with ADHD, parents can learn strategies to support their child's development.

Support Groups: Connecting with others who have ADHD can provide encouragement and practical advice.

Academic Support: School accommodations like extended time for tests or preferential seating.
</Text>

</Text>
<iframe style={styles.ytube} width="560" height="315" src="https://www.youtube.com/embed/NCc-EvGcUn0?si=CNs5tjZqTN20f7r6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </View>
  )
}

export default ADHD

const styles = StyleSheet.create({
    // textCntnt:{
    //     padding: 20
    // }
    ytube:{
        padding: 10
    },
    textCntnt:{
        fontSize: 25,

    }
})
