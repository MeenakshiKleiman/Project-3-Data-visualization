### Comprehensive Analysis and Mapping of Cancer Clinical Trials
![image](https://github.com/user-attachments/assets/e318e364-31f2-4603-8cdf-dc96e8830d53)
![image](https://github.com/user-attachments/assets/3a5bd0ec-3663-4937-b694-dfc22a14be4a)

![image](https://github.com/user-attachments/assets/455b0451-ddfd-4fd7-82ec-cc335f564fce)


Data source: https://clinicaltrials.gov/
![image](https://github.com/user-attachments/assets/b47b52f5-b98e-42e7-876c-f54c5d3d0358)


Cancer Clinical Trial data from past 10 years
	716 rows × 26 columns
![image](https://github.com/user-attachments/assets/87d5b18f-893e-4720-99cf-a453be227129)

## Aims of project

1. What are the trends in clinical trials over the last decade?
2. How does study duration vary across different cancer types and funding sources?
3. What is the distribution of clinical trials by cancer type and funding source?
4. What are the different types and distribution of active clinical trials?
5. To map clinical trial locations across the United States.


## Data cleaning:
-Column of interest: NCT Number, Study Status, Conditions, Interventions, Sponsor, Phases, Funder Type, Start Date, Completion Date, Locations
-Extracted major intervention and created  new column
- Extracted major conditions (cancers) and created  new column by using common key words
-Calculated duration of each study 
-Extracted state and zip code from the location of each clinical trial
-Data Frames based on clinical trial status;
    1. Recruiting
    2. Active-not-recruiting
    3. Completed
    4. Terminated
 
## Plot interactive graphs

![clinical_trials_decade_static](https://github.com/user-attachments/assets/905d147b-871f-4b92-ad14-205e4d85dfa9)
![clinical_trials_static](https://github.com/user-attachments/assets/2ac4574a-e198-455e-8c8b-d70a8a5ef9d5)
![Condition_Funder_Bar](https://github.com/user-attachments/assets/89c247d8-7594-4372-9b42-3f707632b70c)
![Condition_Funder_Pie](https://github.com/user-attachments/assets/5d0dc6c5-2151-4790-ab44-ada3933bc856)
![Condition_Funder](https://github.com/user-attachments/assets/8fbd95f2-25e3-4a96-944c-af5cc6796181)
![Condition_intervention](https://github.com/user-attachments/assets/f45b9baf-11d8-4b6b-8b71-4c8908745828)
![Condition_phase](https://github.com/user-attachments/assets/3c906f61-432a-4269-ae01-eaf42e34e091)


### Clinical Trials Locations: Mapped across the United States

![Map 1 ](https://github.com/user-attachments/assets/5d4265ee-d8e8-4976-80c7-4692fc799ddc)
![Map 2](https://github.com/user-attachments/assets/0cc7d632-c7b5-4ab4-81fe-e0a547cb841f)
![Map 3](https://github.com/user-attachments/assets/a81bbd0d-2d9f-4042-9af4-40c752a0102f)
![Map 4](https://github.com/user-attachments/assets/521a2e3e-0176-4f33-91fe-02bd11efad55)
![Map 5](https://github.com/user-attachments/assets/9dd4d29b-2e33-489d-b55d-cf1066171f7d)
![Map 6](https://github.com/user-attachments/assets/f72be4c0-ed3d-4cb1-8a64-5ae8f64301fb)

### Acknowledgemnt:

Instructor Dave Melillo guided me through out the project.
Tutor Kourt Bailey helped me in trobleshooting with Java script 
I also took help chatgpt to correct syntax error and code refining. 
