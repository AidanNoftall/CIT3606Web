# Lab 6 Python Streamlit

# Lab 6 Start
import streamlit as st

def tuition_net_calculator_simple():
    #Start Cost Start
    TOTAL_COST = 42540 + 2025 #Total Cost ($44,565)
    #Start Cost End

    st.title("Tuition Net Calculator")

    # Inputs Section Start
    gpa = st.number_input("GPA:", min_value=0.0, max_value=4.0, value=3.0, step=0.1)
    sai = st.number_input("FAFSA SAI:", min_value=0, value=10000, step=1)
    is_local = st.checkbox("Local to the area?")
    # Inputs Section End

    # Total Aid Calculation Start
    total_aid = 0
    PELL_MAX = 7395
    # Total Aid Calculation End
    
    # Merit Scholarship Start ($20K Totel)
    if gpa >= 3.5:
        total_aid += 20000
        st.balloons()
        st.info("You earned a **$20,000 Merit Scholarship**!")
    # Merit Scholarship End ($20K Totel)
    
    # Pell Grant Start (7395 - SAI)
    if sai <= PELL_MAX:
        pell_grant = PELL_MAX - sai
        total_aid += pell_grant
        st.info(f"You earned a **${pell_grant:} Pell Grant**!")
        # Pell Grant End (7395 - SAI)
        
    # Local Scholarship Start ($5K Total)
    if is_local:
        total_aid += 5000
        st.info("You earned a **$5,000 Local Scholarship**!")
     # Local Scholarship End ($5K Total)
    
    # Results Section Start
    net_tuition = TOTAL_COST - total_aid
    
    st.metric("Total Aid Awarded", f"${total_aid:}")
    st.metric("Total Cost", f"${TOTAL_COST:}")
    
    st.success(f"**Net Tuition Price: ${net_tuition:}**")
    # Results Section End

if __name__ == "__main__":
    tuition_net_calculator_simple()
# Lab 6 End