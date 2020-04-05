**Short description**

Running massive tests for COVID-19 is crucial for fighting the ongoing pandemic of coronavirus. It is estimated that nearly half of infected people have no symptoms and spread the virus further. In the ideal world national health services would test anybody and isolate all the positive cases. But in real world testing is limited due to its cost, time and resources. That pushes governments to test only the most risky cases or putting healthy people into quarantine. 

One of the breakthrough ideas to deal with this problem is to mix multiple samples from different patients and to use one test on them. It is possible to put mixed samples from 10 people into one test. When the test is positive, the diagnosticians test each case separately to find the infected patient(s). But if the test is negative, this means that all patients are healthy and there was only 1 test instead of 10! That approach was already described by Israeli and German scientists with good results.

Our application is designed for laboratories. Firstly, the diagnostician fills the questionnaire in for each patient. With a simple checkbox list, he marks if the patient has various symptoms, if he was abroad or had contact with someone infected. Then, the app calculates the probability of infection for each case. Initially the weights are set programmatically, but eventually we will use Machine Learning solution to cross-reference positive cases with the questionnaire answers to provide even better results.

The result of our application is the best distribution of samples into buckets, minimising the required number of tests for the whole batch. Using our approach laboratories can increase the throughput by 200% or more, while using the existing equipment and only by changing testing procedures.


**Instruction**
1. Welcome to smartTest application :) 
2. Let's add samples from your patients. You can load example cases (for testing purpose) or in a modal fill in the simple questionaire. You can assign your own IDs. 
3. When finished, check once more the whole list and press "Calculate Buckets" 
4. Now the app assign samples to buckets to find the best way to minimise the overall tests needed. In the refreshed window you will see buckets with samples. 
5. So now you can do the tests! Just mix the samples according to our app and wait for results. 
6. Under each bucket you can find buttons: "No virus", "Virus found", "Not tested". Press the answer according to the results. 
7. Then you can click "Proceed". Even if you haven't tested all buckets you can proceed. 
8. Now the positive buckets were split to find the individual infected case. The negative disappeared and not tested are still here. You can continue the procedure until all samples are tested.
