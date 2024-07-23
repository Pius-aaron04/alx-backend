#!/usr/bin/env python3
"""
Contains a class for simple pagination implementation
"""
import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    The function returns a tuple of page index
    rtype: tuple
    """

    max_index = page * page_size
    min_index = (page - 1) * page_size

    return min_index, max_index


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Fetches the data slice from dataset
        """

        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0
        try:
            _range = index_range(page, page_size)
            return self.dataset()[_range[0]:_range[1]]
        except IndexError:
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        genarates hypermedia data for certain page.
        """

        data = self.get_page(page, page_size)
        hyper: dict = {
                "page_size": len(data),
                "page": page,
                "data": data,
                "next_page": page + 1 if page * page_size <
                len(self.dataset()) else None,
                "prev_page": page - 1 if page > 1 else None,
                "total_pages": len(self.dataset()) / page_size
                }

        return hyper
