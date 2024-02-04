import pandas as pd

def get_data():# Read the text file
    with open('data/chat.txt', 'r') as file:
        lines = file.readlines()
        
    # Initialize empty lists for each column
    times = []
    emitters = []
    messages = []
    emitter1 = ''
    emitter2 = ''

    # Process each line in the text file
    for line in lines:
        # Split the line into date, emitter, and message
        parts = line.split(' - ')
        if len(parts) >= 2:
            # Save data into v  ariables
            date = parts[0].split(',')[0]
            
            hour = parts[0].split(',')[1]
            hour = hour.strip().replace("\u202F", " ") # Delete special character

            time = pd.to_datetime(date + ' ' + hour)
            
            emitter = parts[1].split(':')[0]
            if emitter1 == '':
                emitter1 = emitter
            if emitter2 == '' and emitter1 != emitter:
                emitter2 = emitter
                 
            message = ':'.join(parts[1].split(':')[1:]).strip()
            
            # Append the values to the respective lists
            times.append(time)
            emitters.append(emitter)
            messages.append(message)

    # Create a dataframe from the lists
    messages_df = pd.DataFrame({'time': times,  'emitter': emitters, 'messages': messages})
    
    return [messages_df, emitter1, emitter2]
