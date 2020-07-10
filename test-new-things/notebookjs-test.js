// FileInfo: testing notebookjs, to see how it works.
var nb = require('notebookjs');
const exampleRawData =
  '{\n "cells": [\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "#                                               PreProcessing"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "### Missing values on numerical data"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 29,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "from sklearn.impute import SimpleImputer\\n",\n    "import numpy as np\\n",\n    "import pandas as pd"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 30,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "imp=SimpleImputer()"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 31,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "X_train = [[np.nan, 1, 2], [3, np.nan, 4], [5, np.nan, 6]]\\n",\n    "X_test = [[np.nan, 10, 10], [120, np.nan, 600], [10, np.nan, 30]]"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 32,\n   "metadata": {},\n   "outputs": [\n    {\n     "name": "stdout",\n     "output_type": "stream",\n     "text": [\n      "[[4. 1. 2.]\\n",\n      " [3. 1. 4.]\\n",\n      " [5. 1. 6.]]\\n",\n      "[[  4.  10.  10.]\\n",\n      " [120.   1. 600.]\\n",\n      " [ 10.   1.  30.]]\\n"\n     ]\n    }\n   ],\n   "source": [\n    "X_train= imp.fit_transform(X_train)\\n",\n    "X_test=imp.transform(X_test)\\n",\n    "print(X_train)\\n",\n    "print(X_test)"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "### Encoding on categorical data\\n"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 33,\n   "metadata": {},\n   "outputs": [\n    {\n     "data": {\n      "text/plain": [\n       "array([1, 1, 2, 0], dtype=int32)"\n      ]\n     },\n     "execution_count": 33,\n     "metadata": {},\n     "output_type": "execute_result"\n    }\n   ],\n   "source": [\n    "from sklearn.preprocessing import LabelEncoder\\n",\n    "\\n",\n    "le=LabelEncoder()\\n",\n    "\\n",\n    "le.fit_transform([\\"paris\\", \\"paris\\", \\"tokyo\\", \\"amsterdam\\"])"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "There is a problem here. Here the machine learning model understands that tokyo has higher value than paris and then amsterdam. That is not the case. These are not ordered categories and we cannot compare them. This can be done on sizes like small , medium and large"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "We should prevent machine learning model to think that tokyo is greater than paris and amsterdam. For this we gonna use dummy variables. This can be done in two ways"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "#### using get_dummies from pandas"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 34,\n   "metadata": {},\n   "outputs": [\n    {\n     "data": {\n      "text/html": [\n       "<div>\\n",\n       "<style scoped>\\n",\n       "    .dataframe tbody tr th:only-of-type {\\n",\n       "        vertical-align: middle;\\n",\n       "    }\\n",\n       "\\n",\n       "    .dataframe tbody tr th {\\n",\n       "        vertical-align: top;\\n",\n       "    }\\n",\n       "\\n",\n       "    .dataframe thead th {\\n",\n       "        text-align: right;\\n",\n       "    }\\n",\n       "</style>\\n",\n       "<table border=\\"1\\" class=\\"dataframe\\">\\n",\n       "  <thead>\\n",\n       "    <tr style=\\"text-align: right;\\">\\n",\n       "      <th></th>\\n",\n       "      <th>amsterdam</th>\\n",\n       "      <th>paris</th>\\n",\n       "      <th>tokyo</th>\\n",\n       "    </tr>\\n",\n       "  </thead>\\n",\n       "  <tbody>\\n",\n       "    <tr>\\n",\n       "      <th>0</th>\\n",\n       "      <td>0</td>\\n",\n       "      <td>1</td>\\n",\n       "      <td>0</td>\\n",\n       "    </tr>\\n",\n       "    <tr>\\n",\n       "      <th>1</th>\\n",\n       "      <td>0</td>\\n",\n       "      <td>1</td>\\n",\n       "      <td>0</td>\\n",\n       "    </tr>\\n",\n       "    <tr>\\n",\n       "      <th>2</th>\\n",\n       "      <td>0</td>\\n",\n       "      <td>0</td>\\n",\n       "      <td>1</td>\\n",\n       "    </tr>\\n",\n       "    <tr>\\n",\n       "      <th>3</th>\\n",\n       "      <td>1</td>\\n",\n       "      <td>0</td>\\n",\n       "      <td>0</td>\\n",\n       "    </tr>\\n",\n       "  </tbody>\\n",\n       "</table>\\n",\n       "</div>"\n      ],\n      "text/plain": [\n       "   amsterdam  paris  tokyo\\n",\n       "0          0      1      0\\n",\n       "1          0      1      0\\n",\n       "2          0      0      1\\n",\n       "3          1      0      0"\n      ]\n     },\n     "execution_count": 34,\n     "metadata": {},\n     "output_type": "execute_result"\n    }\n   ],\n   "source": [\n    "dummy=pd.get_dummies([\\"paris\\", \\"paris\\", \\"tokyo\\", \\"amsterdam\\"])\\n",\n    "dummy"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "#### using OneHotEncoder from sklearn"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 35,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "from sklearn.preprocessing import OneHotEncoder"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 36,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "ohe=OneHotEncoder()\\n",\n    "cat=[[\\"paris\\", \\"paris\\", \\"tokyo\\", \\"amsterdam\\"]]"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 37,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "cate=ohe.fit_transform(cat).toarray()"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 38,\n   "metadata": {},\n   "outputs": [\n    {\n     "name": "stdout",\n     "output_type": "stream",\n     "text": [\n      "[[1. 1. 1. 1.]]\\n"\n     ]\n    }\n   ],\n   "source": [\n    "print(cate)"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "### Splitting the data into train and test"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 39,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "from sklearn.model_selection import train_test_split"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 40,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "X, y = np.arange(10).reshape((5, 2)), range(5)"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 41,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "## Feature Scaling"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "#### standard scaling is must since it helps to compute faster by many ml models as many models uses euclidean distance\\n",\n    "\\n",\n    "\\n",\n    "\\n",\n    "#### x train and x test should be scaled on same basis, hence we use fit transform in train and transform in test \\n",\n    "####  The reason is that we want to pretend that the test data is “new, unseen data.” We use the test dataset to get a good estimate of how our model performs on any new data.\\n",\n    "#### Now, in a real application, the new, unseen data could be just 1 data point that we want to classify. (How do we estimate mean and standard deviation if we have only 1 data point?) That’s an intuitive case to show why we need to keep and use the training data parameters for scaling the test set.\\n"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 42,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "from sklearn.preprocessing import StandardScaler"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 43,\n   "metadata": {},\n   "outputs": [],\n   "source": [\n    "X_train = [[0, 0], [0, 0], [2, 10], [91, 199]]\\n",\n    "X_test=[[187,190], [91, 19]]\\n",\n    "scaler = StandardScaler()\\n"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 44,\n   "metadata": {},\n   "outputs": [\n    {\n     "name": "stdout",\n     "output_type": "stream",\n     "text": [\n      "[[-0.59426437 -0.61597805]\\n",\n      " [-0.59426437 -0.61597805]\\n",\n      " [-0.54314485 -0.49808751]\\n",\n      " [ 1.73167358  1.73004362]]\\n",\n      "[[ 4.18541032  1.62394213]\\n",\n      " [ 1.73167358 -0.39198603]]\\n"\n     ]\n    }\n   ],\n   "source": [\n    "X_t= scaler.fit_transform(X_train)\\n",\n    "X_tes=scaler.transform(X_test)\\n",\n    "print(X_t)\\n",\n    "print(X_tes)"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": null,\n   "metadata": {},\n   "outputs": [],\n   "source": []\n  }\n ],\n "metadata": {\n  "kernelspec": {\n   "display_name": "Python 3",\n   "language": "python",\n   "name": "python3"\n  },\n  "language_info": {\n   "codemirror_mode": {\n    "name": "ipython",\n    "version": 3\n   },\n   "file_extension": ".py",\n   "mimetype": "text/x-python",\n   "name": "python",\n   "nbconvert_exporter": "python",\n   "pygments_lexer": "ipython3",\n   "version": "3.7.1"\n  }\n },\n "nbformat": 4,\n "nbformat_minor": 1\n}\n';
var ipynb = JSON.parse(exampleRawData);
var notebook = nb.parse(ipynb);
console.log(notebook.render().outerHTML);