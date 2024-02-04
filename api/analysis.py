import pandas as pd
import emoji as emj

from cleaning_messages import get_data


data = get_data()
# Get dataframe data
messages_df = data[0] 

emitter1 = data[1]
emitter2 = data[2]

# Main function, will return all dictionaries
def data_analysis():
    return {'cute_words' : cute_words_count(), 'top_emojis' : top_emojis(), "various_data" : various_data()}

# Function to count the number of hearts
def cute_words_count():
    data_cute_words = {}
    # List with the words to count
    words = [['amo', 'total_lovesyou'], ['te quiero| tqm', 'total_appreciateyou'], ['bonita | bonito', 'total_pretties'],
             ['preciosa | precioso', 'total_beatiful']]
    
    # Loop to count the number of times the words are used and save them in a dictionary
    for word in words:
        count = messages_df['messages'].str.contains(word[0], case=False).sum()
        data_cute_words[word[1]] = count
    
    return data_cute_words

# Count Top emojis:
def top_emojis():
    # Count and getting emojis from messages using emoji_list to get a  list with a dict with all emojis in every message
    messages_df['emojis'] = messages_df['messages'].apply(emj.emoji_list)
    # Use a lambda taking all values from the dict previously created
    messages_df['emojis'] = messages_df['emojis']\
    .apply(lambda x: [y['emoji'] for y in x])
    
    # Create a new table with type of emojis and times it was used in every message
    #   First we stack all emojis from every line
    #   Then we count the number of times every emoji was used
    #   We reset the index to get the emojis and times used in a column
    emoji_table = messages_df['emojis'].apply(pd.Series).stack()\
    .value_counts().reset_index()
    # Assigning names to the columns
    emoji_table.columns = ['emoji', 'count']
   
    # Get the top 10 emojis
    emoji_top  = emoji_table.head(10) 
    # Convert the top 10 dataframe to a dictionary and return
    return emoji_top.to_dict(orient='index')

def various_data():
    def when_weTalkMore():
        # Get the month with the most messages
        month = messages_df['time'].dt.month_name().value_counts().idxmax()
        # Get the day with the most messages
        day = messages_df['time'].dt.day_name().value_counts().idxmax()
        # Get the hour with the most messages
        hour = messages_df['time'].dt.hour.value_counts().idxmax()
        
        return  {'month': month, 'day' : day, 'hour' : hour}
    
    def who_talkMore():
        # Get the total messages sent by each person
        who_df = messages_df.groupby('emitter', as_index=False)['messages'].count()
        
        return who_df.to_dict(orient='index')
    
    def words_mean():
        # Get the mean of words used by day
        words_mean_byDay =  messages_df.groupby(messages_df['time'].dt.date)['messages'].count().mean()
        # Get all messages from emitter 1
        emitter1_df = messages_df[messages_df['emitter'] == emitter1]
        words_byEmitter1 = emitter1_df.groupby(messages_df['time'].dt.date)['messages'].count().mean()
        # Get all messages from emitter 2
        emitter2_df = messages_df[messages_df['emitter'] == emitter2]
        words_byEmitter2 = emitter2_df.groupby(messages_df['time'].dt.date)['messages'].count().mean()
        
        return {'byDay': round(words_mean_byDay,2), emitter1: round(words_byEmitter1,2), emitter2 : round(words_byEmitter2,2)}
    
    return {'date_weTalkMore' : when_weTalkMore(), 'who_TalkMore' : who_talkMore(), 'words_mean' : words_mean()}

