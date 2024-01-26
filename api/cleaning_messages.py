import pandas as pd

def get_data():# Read the text file
    with open('chat.txt', 'r') as file:
        lines = file.readlines()
        
    # Initialize empty lists for each column
    dates = []
    hours = []
    emitters = []
    messages = []

    # Process each line in the text file
    for line in lines:
        # Split the line into date, emitter, and message
        parts = line.split(' - ')
        if len(parts) >= 2:
            # Save data into v  ariables
            date = parts[0].split(',')[0]
            hour = parts[0].split(',')[1]
            emitter = parts[1].split(':')[0]
            message = ':'.join(parts[1].split(':')[1:]).strip()
            
            # Append the values to the respective lists
            dates.append(date)
            hours.append(hour)
            emitters.append(emitter)
            messages.append(message)

    # Create a dataframe from the lists
    messages_df = pd.DataFrame({'date': dates, 'hour':hours,  'emitter': emitters, 'message': messages})

    return messages_df

