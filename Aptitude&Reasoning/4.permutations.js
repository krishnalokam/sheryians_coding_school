/*
Q1 In how many different ways the letters of the word "BRAIN" can be arranged

BRAIN - 5 letters

    - - - - - 
    5 4 3 2 1 = 120

---------------------------------------------------------------------------------------------------------------------
Q2 In how many different ways the letters of the word "TITLE" can be arranged

TITLE - 5 letters, one repetition of T for 2 

    ans = 5!/2! = 120/2 = 60


---------------------------------------------------------------------------------------------------------------------
Q3 In how many different ways the letters of the word "LEADING" can be arranged, so that vowels always come together.

ans:- LEADING - 7 letters
        EAI.  - 3 letter alwasys come together - 3!
        5! * 3! = 120 * 6 = 720

---------------------------------------------------------------------------------------------------------------------
Q3 In how many different ways the letters of the word "CORPORATION" can be arranged, 
   so that vowels always come together
   CORPORATION = CRPRTN  OOAIO
                  =   7! * 5!/ (2! * 3!)
                  = 50400
---------------------------------------------------------------------------------------------------------------------
Q3 In how many 3 digit numbers can be formed  with 1,2,3,4,5 but the numbers must be multiple of 5

ans: To make 3 digit to be multiple of 5, fix the last digit 5 
            - - 5
            5 * 5 = 25
---------------------------------------------------------------------------------------------------------------------
Q3 How many numbers of four digitis greater than 2400 can be formed with digits 0,1,2,3,4,5,6 no digit being repeated in
any number.
 ans: numbers greater than 3000 = - - - - 
                                = 4 * 6 * 5 * 4 
                                = 480
       numbers greater than 2400 and less than 3000
                                 2 - - -
                                =  3 * 5 * 4 
                                = 60
      Total = 480 + 60 = 540
---------------------------------------------------------------------------------------------------------------------
                                          Combination Questions
---------------------------------------------------------------------------------------------------------------------
Q4. From a group of 12 men 10 has to be selected in how many ways can we select 10 men.

    = nCr = 12C10 = 12C2 = (12 * 11 )/(2 * 1) = 66
---------------------------------------------------------------------------------------------------------------------
Q5. From a group of 7 men and 6 women, five persons are to be selected to form a committee.In which there must be
    2 women and 3 men.

ans:    - - - - - 
        6C2 * 7C3 = (6*5)/2*1 * (7 * 6 * 5 )/(3 * 2) = 15 * 35 
        = 350 + 175
        = 525
---------------------------------------------------------------------------------------------------------------------        
Q6. From a group of 7 men and 6 women, five persons are to be selected to form a committee so that atleast 3 men are
there on the comittee. In how many ways can it be done?

ans = - - - - - 
    = 7C3 * 6C2 + 7C4 * 6C1 + 7C5
   
---------------------------------------------------------------------------------------------------------------------
 Q7. Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?

            - - -  - - 
            7C3 * 4C2 = (7 * 6 * 5)/(3 * 2) * (4 * 3)/(2 * 1)
                      = 35 * 6
                      210
          and the 5 can be arranged = 210 * 5! = 210 * 120 = 25200
---------------------------------------------------------------------------------------------------------------------
Q8.In a group of 6 boys and 4 girls, four children are to be selected. In how many different ways can they be selected
such that alteast one boy should be there.

ans:  -  -  -  -
      Take all combinations means take 4 people from 10 and subtract one condition (i.e, all girls)
      = 10C4 - 4C4
      = 210 - 1
      = 209